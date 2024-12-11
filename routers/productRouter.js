const express = require('express')
const productRouter = express.Router()
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('../controllers/productController')

//localhost:3000/products
productRouter.get('/',getProducts)

//localhost:3000/products/34234243242
productRouter.get('/:id',getProductById)

//Create product
productRouter.post('/',createProduct)

//Update product
productRouter.patch('/:id',updateProduct)

//Delete product
productRouter.delete('/:id',deleteProduct)

module.exports = productRouter