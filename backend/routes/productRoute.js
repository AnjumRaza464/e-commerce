import express from 'express'
const router = express.Router()
import { getAllProducts,getProduct,createNewProduct,updateProduct,deleteProduct }
from '../controller/productController.js'

router.route('/products').get(getAllProducts)
router.route('/product').get(getProduct)
router.route('/product/new').post(createNewProduct)
router.route('/product/update').put(updateProduct)
router.route('/product/delete').delete(deleteProduct)

export default router