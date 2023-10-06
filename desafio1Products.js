class ProductManager {
    constructor() {
        /* Creo el arreglo que inicia vacío */
        this.products = [];
    }
    //Creo un método que recibe los parametros propuestos
    addProduct(title, description, price, thumbnail, code, stock) {

        if (!this.#fieldsValidation(title, description, price, thumbnail, code, stock)) {
            return; // Si la validación de campos falla, no se agrega el producto.
        }

        if (this.#codeValidation(code)) {
            return; // Si la validación de código falla, no se agrega el producto.
        }

        // Si todas las validaciones pasan, se agrega el producto.
        const product = {
            id: this.#idIncrement() + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(product);
        console.log(`Producto '${title}' Agregado, ID: ${product.id}`);

    }
    //Creo un método para hacer un id autoincremental
    #idIncrement() {
        let maxId = 0;
        this.products.forEach((product) => {
            if (product.id > maxId) maxId = product.id;
        });
        return maxId;
    }
    //Creo un metodo para validar que el código del producto no se repita y luego utilizarlo en addProduct
    #codeValidation(code) {
        if (this.products.some(product => product.code === code)) {
            console.log("El producto ya existe")
            return true
        } return false
    }
    //Método para validar campos obligatorios
    #fieldsValidation(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Los campos son requeridos")
            return false;
        }
        return true
    }
    //Metodo para traer todos los productos creados por el momento
    getProducts() {
        console.log(this.products);;
    }
    //Metodo que recibe un id y comienza a buscar en el array original si existe un producto con la misma id lo devuelve, sino muestra not found
    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            console.log(`Producto Encontrado: 
            Nombre: ${product.title}  
            Descripcion: ${product.description} 
            Precio: $${product.price} 
            Imagen: ${product.thumbnail}
            Codigo: ${product.code}
            Id: ${product.id}`);
        } else {
            console.log("Producto no encontrado (Not found).");
        }
    }
}
/*------------------------------Ejecucion del programa---------------------------------- */
const productManager = new ProductManager();
console.log('------Devuelve []------');
productManager.getProducts(); 
console.log('------Creo Los productos------');
productManager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25,
)

productManager.addProduct(
    'Televisor',
    'Televisor FULL HD 4K Samsung',
    22,
    'ruta/imagen/televisor',
    'P2', 
    30
);
console.log('------Muestro Productos Agregados------');
productManager.getProducts(); 

console.log('------Muestro error por codigo duplicado------');
productManager.addProduct( 
    'Televisor',
    'Televisor FULL HD 4K Samsung',
    22,
    'ruta/imagen/televisor',
    'P2', 
    30
);
console.log('------Agrego otro Producto------');

productManager.addProduct(
    'Estufa',
    'Estufa de 2 colores',
    35,
    'ruta/imagen/estufa',
    'P3', 
    30
);
console.log('------Muestro los 3 Productos Agregados------');

productManager.getProducts(); //TRAIGO LOS 3 PRODUCTOS

console.log('------Muestro Validación de campos requeridos llamando al metodo con campos vacios------');
productManager.addProduct(
    'Estufa',
    35,
    'ruta/imagen/estufa',
    30 
);
console.log('------Devuelve Productos por Id, o NOT FOUND------');

let productId = 1 // Busco producto existente
productManager.getProductById(productId);
productId = 7 // Busco producto no existente
productManager.getProductById(productId);