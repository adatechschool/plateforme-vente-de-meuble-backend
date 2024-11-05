const getAllProductsQuery = () => {
    return `
    SELECT 
    products.id,
    products.product_name, 
    products.price,
    CONCAT('[', GROUP_CONCAT(CONCAT('"', images.image_link, '"') SEPARATOR ', '), ']') AS image_links
FROM 
    products 
INNER JOIN 
    images ON images.product_id = products.id
GROUP BY 
    products.id;`
}

const getProductInfoQuery = () => {
    return `
    SELECT
        *
    FROM
        products WHERE id=6`
}

exports.getAllProductsQuery = getAllProductsQuery
exports.getProductInfoQuery = getProductInfoQuery