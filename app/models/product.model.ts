import connection from "./db";
const queries = require("../models/queries")

interface Product {
    product_name: string;
    price: number;
    type: string;
    material: string;
    color: string;
    state: string;
    description: string;
    in_stock: boolean;
    user_id: number;
}

class Product {
    static getAll: (result: (err: Error | null, data: Product[] | null) => void) => void;
    static getProductInfo: (result: (err: Error | null, data: Product | null) => void) => void;
    static postNewProduct: (newProduct: Product, result: (err: Error | null, data: Product | null) => void) => void;
    constructor(product: any) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.type = product.type;
        this.material = product.material;
        this.color = product.color;
        this.state = product.state;
        this.description = product.description;
        this.in_stock = product.in_stock;
        this.user_id = product.user_id
    }
}

// defines getAll method for Product
Product.getAll = (result: (err: Error | null, data: Product[] | null) => void) => {
    // gets corresponding query
    const query = queries.getAllProductsQuery()
    // trigs query
    // connection represents our db connection from db.ts file
    connection.query(query, (err: Error, res: Product[]) => {
        // error handler
        if (err) {
            console.log("error: ", err);
            result(err, null)
            return
        }
        // returns query result
        console.log("✅ products: ", res);
        result(null, res)
        
    })
}

Product.getProductInfo = (result: (err: Error | null, data: Product | null) => void) => {
    const query = queries.getProductInfoQuery()

    console.log('coucou!!')
    connection.query(query, (err: Error, res: Product) => {
        // error handler
        if (err) {
            console.log("error: ", err);
            result(err, null)
            return
        }
        // returns query result
        console.log("product: ", res);
        result(null, res)
        
    })
}

Product.postNewProduct = (newProduct: Product, result: (err: Error | null, data: Product | null) => void) => {
    const query = queries.postNewProductQuery()

    console.log("🦊", newProduct)
    connection.query(query, [newProduct.product_name, newProduct.price, newProduct.type, newProduct.material, newProduct.color, newProduct.state, newProduct.description, newProduct.in_stock, newProduct.user_id], (err: Error, res: Product) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("New product: ", { ...newProduct });
        result(null, { ...newProduct})
    })
}


// Post.findById = (id, result) => {
//     const query = `SELECT * FROM posts WHERE ID = ${id}`
//     sql.query(query, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;            
//         }

//         if (res.length) {
//             console.log("found posts: ", res[0]);
//             result(null, res[0])
//             return;            
//         }
//     })
// }

export default Product


