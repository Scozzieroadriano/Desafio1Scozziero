# Gestor de Productos

Este proyecto presenta una clase en JavaScript llamada `ProductManager` que se utiliza para gestionar un conjunto de productos. La clase permite agregar productos, validar campos requeridos y evitar la duplicación de productos por código. También proporciona métodos para obtener todos los productos y buscar productos por su ID.

## Uso

Para utilizar la clase `ProductManager`, sigue estos pasos:

1. Crea una instancia de `ProductManager`:

    const productManager = new ProductManager();

2. Agrega productos utilizando el método addProduct. Por ejemplo:

    productManager.addProduct(
    'Televisor',
    'Televisor FULL HD 4K Samsung',
    22,
    'ruta/imagen/televisor',
    'P2', 
    30
);

3. Puedes usar el método getProducts para obtener la lista de todos los productos:
    productManager.getProducts();

4. Utiliza el método getProductById para buscar un producto por su ID. Por ejemplo:
    const productId = 1; // Cambia el ID según tu necesidad
        const product = productManager.getProductById(productId);
        if (product) {
            // Hacer algo con el producto encontrado
        } else {
            console.log("Producto no encontrado (Not found).");
    }

La clase ProductManager realiza las siguientes validaciones:

Verifica que todos los campos requeridos (título, descripción, precio, thumbnail, código y stock) estén presentes al agregar un producto.

Evita la duplicación de productos por código. Si intentas agregar un producto con el mismo código que uno existente, mostrará un mensaje de error y no se agregará el producto.
