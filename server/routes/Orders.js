const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')

const router = Router()

// aqui vai as requisições
router.get("/", OrdersController.findAllOrders);
router.get("/:uid", OrdersController.ordersById);
router.post("/", OrdersController.postNewOrder);
router.delete("/:uid",  OrdersController.deleteOrders);
router.put("/:uid", OrdersController.updateOrders);

module.exports = router