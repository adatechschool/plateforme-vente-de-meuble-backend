const getAllProductsQuery = () => {
    return `
    SELECT
        *
    FROM
        products`
}

const getProductInfoQuery = () => {
    return `
    SELECT
        *
    FROM
        products 
    WHERE id=6`
}

const postNewProductQuery = () => {
    return `
    INSERT INTO 
        products (product_name, price, type, material, color, state, description, in_stock, user_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
}


exports.getAllProductsQuery = getAllProductsQuery
exports.getProductInfoQuery = getProductInfoQuery
exports.postNewProductQuery = postNewProductQuery