class ProductManager {
    products;
    constructor() {
        this.products = [];
    }
    addProduct(title, description, price, thumbnail, code, stock) {
       
        if (
            title == undefined ||
            description == undefined ||
            price == undefined ||
            thumbnail == undefined ||
            code == undefined ||
            stock == undefined ||
        ){
            throw new Error ("Todos los campos son obligatorios");
        }
        let codeExists = this.products.some((dato) => dato.code == code);
        if (codeExists) {
            throw new Error("El codigo ya existe");
        } else {
            const newProduct = {
                id: this.products.length + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };

            this.products.push(newProduct);
        }
        getProducts() {
            return this.products;
        }
        getProductsById(id) {
            let product = this.products.find(dato => dato.id == id)
            if (product !== undefined) {
                return product;
            } else {
                return "no existe el producto";
            }
        }
    }

    let myFirstProducts = new ProductManager();
    myFirstProducts.addProduct(
        "Fertilizante",
        "Top Crop",
        2400,
        "http://imagen.jpg",
        "001",
        19,
    );
    myFirstProducts.addProduct(
        "Sustrato",
        "Grow mix",
        5400,
        "http://imagen.jpg",
        "002",
        30,
    );
    myFirstProducts.addProduct(
        "Insecticida",
        "Kawsay",
        1400,
        "http://imagen.jpg",
        "003",
        17,
    );
}
