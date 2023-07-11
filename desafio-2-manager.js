import { ProductManager } from "./ProductManager.js";

let myFirstStore = new ProductManager("./productos.json");
let mySecondStore = new ProductManager("./productosLacteos.json");


mySecondStore
  .deleteProductById("b90b5153-3f6f-4dfb-b7b5-ae9e48089d88")
  .then((data) => console.log("el resultado de la eliminacion es:", data));
