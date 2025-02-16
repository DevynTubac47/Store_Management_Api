import User from "./user.model.js"

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
            message: 'Error updating Role',
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