const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

// aqui vai as requisições
router.get("/", ProductsController.findAllProducts);
router.get("/:uid", ProductsController.productsById);
router.post("/", ProductsController.postNewProduct);
router.delete("/:uid", ProductsController.deleteProduct);
router.put("/:uid", ProductsController.updateProduct);

module.exports = router