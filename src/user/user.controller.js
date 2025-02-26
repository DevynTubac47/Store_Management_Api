import User from "./user.model.js"
import { hash, verify } from "argon2";
import fs from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


export const updateRol = async (req, res) => {
    try{
        const { uid } = req.params;
        const { role } = req.body;

        const updateRol = await User.findByIdAndUpdate(uid, { role }, {new: true})

        res.status(200).json({
            success: true,
            message: 'Update Rol',
            updateRol,
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error updating Role',
            error: error.message
        })
    }
}

export const updateUser = async(req, res) => {
    try{
        const {...data} = req.body;
        const { uid } = req.params;

        const user = await User.findByIdAndUpdate(uid, data, { new: true });

        res.status(200).json({
            success: true,
            message: 'Update User',
            user,
        })    
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error.message
        })
    }
}

export const updateUserProfile = async(req, res) => {
    try{
        const { username, ...data} = req.body;
        const { uid } = req.params;

        if (req.usuario._id.toString() !== uid) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to update this profile'
            });
        }

        if (username) {
            const existingUser = await User.findOne({ username });
            if (existingUser && existingUser._id.toString() !== uid) {
                return res.status(400).json({
                    success: false,
                    message: "Username already exists"
                });
            }
            data.username = username; 
        }

        const user = await User.findByIdAndUpdate(uid, data, { new: true });

        res.status(200).json({
            success: true,
            message: 'Update Profile',
            user,
        })    
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error updating profile',
            error: error.message
        })
    }
}

export const deleteUser = async(req, res) => {
    try{
        const { uid } = req.params;

        const user = await User.findByIdAndDelete( uid );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: 'Delete User',
            user,
        })   
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error deleting Role',
            error: error.message
        })
    }
}

export const deleteUserProfile = async(req, res) => {
    try{
        const { uid } = req.params;
        const { confirmDeletion } = req.body;

        if (req.usuario._id.toString() !== uid) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to update this profile'
            });
        }

        if (!confirmDeletion || confirmDeletion !== 'DELETE_PROFILE') {
            return res.status(400).json({
                success: false,
                message: 'You must confirm the deletion by providing the correct confirmation code.'
            });
        }

        const user = await User.findByIdAndDelete( uid );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: 'Delete User',
            user,
        })   
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error deleting Role',
            error: error.message
        })
    }
}

export const updatePassword = async (req, res) => {
    try {
        const { uid } = req.params;
        const { oldPassword, newPassword } = req.body;

        if (req.usuario._id.toString() !== uid) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to delete this user',
            });
        }

        const user = await User.findById(uid);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const concurrentPassword = await verify(user.password, oldPassword);
        if(!concurrentPassword) {
            return res.status(400).json({
                success: false,
                message: 'The current password is incorrect'
            });
        }

        const oldAndNewPassword = await verify(user.password, newPassword);
        if (oldAndNewPassword) {
            return res.status(400).json({
                success: false,
                message: 'The new password cannot be the same as the previous one'
            });
        }

        const encryptedPassword = await hash(newPassword);
        await User.findByIdAndUpdate(uid, { password: encryptedPassword }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Contraseña actualizada",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar contraseña",
            error: err.message
        });
    }
};

export const updateProfilePicture = async (req, res) => {
    try {
        const { uid } = req.params;
        let newProfilePicture = req.file ? req.file.filename : null;

        if (req.usuario._id.toString() !== uid) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to delete this user',
            });
        }

        if (!newProfilePicture) {
            return res.status(400).json({
                success: false,
                messagge: 'No se proporcionó una nueva foto de perfil',
            });
        }

        const user = await User.findById(uid);

        if (user.profilePicture) {
            const oldProfilePicturePath = join(__dirname, "../../public/uploads/profile-pictures", user.profilePicture);
            await fs.unlink(oldProfilePicturePath);
        }

        user.profilePicture = newProfilePicture;
        await user.save();

        res.status(200).json({
            success: true,
            messagge: 'Foto de perfil actualizada',
            user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            messagge: 'Error al actualizar la foto de perfil',
            error: err.message
        });
    }
};

