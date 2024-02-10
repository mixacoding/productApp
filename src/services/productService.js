import axios from "axios";

class ProductServices{
    static getAllProducts = ()=> axios.get('https://dummyjson.com/products');
}


export default ProductServices;