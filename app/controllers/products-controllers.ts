import { Request, Response } from "express"
import Product from "../models/product.model"
import { get } from "http"

// defines middleware getAll and assign it the getAll method from Product
const getAllProducts = (req: Request, res: Response) => {
    Product.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occured while getting posts.'
            })
            console.log('Some error occured while getting all products');

        }
        
        if (data?.length !== undefined && data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const formattedImageLinks = JSON.parse(data[i].image_links)
                data[i].image_links = formattedImageLinks
            }
        }
        
        res.send(data)
    })
}

const getProduct = (req: Request, res: Response) => {
    Product.getProductInfo((err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occured while getting product info.'    
            })
            console.log('Some error occured while getting product info.');
        } else {
            res.send(data)

            
        }
       
        
    })
}


// const findById = (req ,res) => {
//     Post.findById(req.params.id, (err, data) => {
//         if (err) {
//             res.status(500).send({
//                 message: `Some error occured while getting post with id: ${req.params.id}`
//             })
//         } else {
//             res.send(data)
//         }
//     })
// }



// // images request
// // get all images from product id
// // return arr with all urls
// const getImages = (productData: Product | null) => {
//     let imageArray: string[] = []
//         console.log('product', productData);
    
// }

exports.getAllProducts = getAllProducts
exports.getProduct = getProduct