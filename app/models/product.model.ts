import connection from "./db";
const queries = require("../models/queries")

interface Product {
    id: number;
    title: string;
    price: number;
    type: string;
    material: string;
    color: string;
    condition: string;
    description: string;
    in_stock: boolean;
    updated_at: string;
    created_at: string;
    user_id: number;
    image_links: string;
}

class Product {
    static getAll: (result: (err: Error | null, data: Product[] | null) => void) => void;
    static getProductInfo: (result: (err: Error | null, data: Product | null) => void) => void;
    constructor(product: any) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.type = product.type;
        this.material = product.material;
        this.color = product.color;
        this.condition = product.condition;
        this.description = product.description;
        this.in_stock = product.in_stock;
        this.updated_at = product.updated_at;
        this.created_at = product.created_at;
        this.user_id = product.user_id;
        this.image_links = product.image_links;
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
        // console.log("products: ", res);
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


