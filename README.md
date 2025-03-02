# Store_Management_Api
Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa. La aplicación se estructura en dos secciones principales, administrador y cliente.

## Requisitos

- Node.js
- MongoDB
- Postman (para probar los endpoints)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura tu base de datos MongoDB y ajusta la conexión en el archivo de configuración de la aplicación.

4. Ejecuta la aplicación:
   ```bash
   npm start
   ```

5. La API estará disponible en `http://localhost:3003`.

---

## 🔹 **Usuario Administrador por Defecto**

```json
  "username": "Admin",
  "email": "admin@gmail.com",
  "password": "123456789",
  "role": "ADMIN_ROLE"
```

## Endpoints

### Usuarios

#### - **Actualizar Rol**

- **URL:** `PATCH /storeManagement/v1/user/updateRol/{userId}`
- **Body:**
  ```json
  {
    "rol": "ADMIN_ROLE"
  }
  ```
- **Authorization:** Bearer Token

#### - **Actualizar Usuario**

- **URL:** `PUT /storeManagement/v1/user/updateUser/{userId}`
- **Body:**
  ```json
  {
    "name": "1dasda",
    "surname": "dadasdasd",
    "username": "devdsa5",
    "phone": "098765432"
  }
  ```
- **Authorization:** Bearer Token

#### - **Actualizar Perfil**

- **URL:** `PUT /storeManagement/v1/user/updateProfile/{userId}`
- **Body:**
  ```json
  {
    "name": "1dasda",
    "phone": "098765432",
    "email": "das@gmail.com"
  }
  ```
- **Authorization:** Bearer Token

#### - **Eliminar Usuario**

- **URL:** `DELETE /storeManagement/v1/user/deleteUser/{userId}`
- **Authorization:** Bearer Token

#### - **Eliminar Perfil**

- **URL:** `DELETE /storeManagement/v1/user/deleteProfile/{userId}`
- **Body:**
  ```json
  {
    "confirmDeletion": "DELETE_PROFILE"
  }
  ```
- **Authorization:** Bearer Token

#### - **Actualizar Contraseña**

- **URL:** `PATCH /storeManagement/v1/user/updatePassword/{userId}`
- **Body:**
  ```json
  {
    "oldPassword": "12345678",
    "newPassword": "0987654321"
  }
  ```
- **Authorization:** Bearer Token

#### - **Actualizar Foto de Perfil**

- **URL:** `PATCH /storeManagement/v1/user/updateProfilePicture/{userId}`
- **Authorization:** Bearer Token
- **Body:**
  ```json
  {
    "profilePicture": "<archivo_imagen>"
  }
  ```

---

### Categorías

#### - **Agregar Categoría**

- **URL:** `POST /storeManagement/v1/admin/category/addCategory`
- **Body:**
  ```json
  {
    "nameCategory": "Floristeria2",
    "descriptionCategory": "Cuidado de Flores"
  }
  ```

#### - **Listar Categorías**

- **URL:** `GET /storeManagement/v1/admin/category/`

#### - **Actualizar Categoría**

- **URL:** `PATCH /storeManagement/v1/admin/category/updateCategory/{categoryId}`
- **Body:**
  ```json
  {
    "newDescription": "Hola Mundo"
  }
  ```

#### - **Eliminar Categoría**

- **URL:** `DELETE /storeManagement/v1/admin/category/deleteCategory/{categoryId}`
- **Authorization:** Bearer Token

---


### Productos

#### - **Actualizar Producto**

- **URL:** `PATCH /storeManagement/v1/product/updateProduct/{productId}`
- **Body:**
  ```json
  {
    "name": "Nuevo Producto",
    "description": "Descripción del producto",
    "price": 19.99
  }
  ```
- **Authorization:** Bearer Token

#### - **Eliminar Producto**

- **URL:** `DELETE /storeManagement/v1/product/deleteProduct/{productId}`
- **Authorization:** Bearer Token

#### - **Top Selling Products**

- **URL:** `GET /storeManagement/v1/product/topSellingProducts`
- **Método:** GET
- **Descripción:** Obtiene los productos más vendidos.

---

### Carrito de Compras

#### - **Añadir Productos al Carrito**

- **URL:** `POST /storeManagement/v1/shoopingCart/addProductCart`
- **Método:** POST
- **Cuerpo:**
  ```json
  {
    "nameProduct": "Juguetes",
    "quantity": 1
  }
  ```

#### - **Obtener Productos del Carrito**

- **URL:** `GET /storeManagement/v1/shoopingCart/`
- **Método:** GET
- **Descripción:** Obtiene los productos agregados al carrito.

#### - **Eliminar Producto del Carrito**
- **URL:** `DELETE /storeManagement/v1/shoopingCart/deleteProductCart`
- **Método:** DELETE
- **Cuerpo:**
  ```json
  {
    "nameProduct": "Pepsi"
  }
  ```
---

### Compras

#### - **Realizar Compra Completa**
- **URL:** `POST /storeManagement/v1/purchase/completePurchase`
- **Método:** POST
- **Descripción:** Realiza la compra de los productos en el carrito.

#### - **Historial de Compras**
- **URL:** `GET /storeManagement/v1/purchase/historyPurchase`
- **Método:** GET
- **Descripción:** Obtiene el historial de compras del usuario.

---

### Facturación

#### - **Actualizar Factura**
- **URL:** `PUT /storeManagement/v1/invoice/updateInvoice/{invoiceId}`
- **Método:** PUT
- **Cuerpo:**
  ```json
  {
    "products": [
      {
        "nameProduct": "Juguetes",
        "quantity": 1,
        "price": 2
      }
    ]
  }
  ```

#### - **Obtener Facturas del Usuario**
- **URL:** `GET /storeManagement/v1/invoice/invoices`
- **Método:** GET
- **Descripción:** Obtiene todas las facturas asociadas al usuario autenticado.

---

## Autenticación en Postman

Para probar los endpoints que requieren autenticación (como el registro privado o añadir productos al carrito), necesitarás incluir un token en el encabezado de la solicitud:

- **Autenticación**: Bearer Token
- **Ejemplo**:
  ```bash
  Authorization: Bearer <tu_token_aqui>
  ```

---

## Notas

- Esta API está diseñada para gestionar un sistema de tienda en línea con funcionalidades como gestión de categorías, productos y usuarios.
- Todos los endpoints que requieren autenticación necesitan un token válido en el encabezado `Authorization` con formato `Bearer <token>`.

---

