import { Express } from "express";
const productRoutes = (app: Express) => {

    // import products controllers
    const products = require("../controllers/products-controllers")

    // import router module from express package
    // a tool for organizing and structuring the application's routes
    const router = require("express").Router()

    // define a route for the root path
    router.get('/home', products.getAllProducts)

    // define a route for each product
    router.get('/product/:id', products.getProduct)

    // define a route for dashboard
    router.get('/dashboard', products.getAllProductsDashboard)

    router.post('/dashboard/new-product', products.postNewProduct)

    // mount the router to the main app on the specified path
    app.use('/', router)
}

export default productRoutes