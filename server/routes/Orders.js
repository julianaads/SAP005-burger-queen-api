const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')

const router = Router()

// aqui vai as requisições
router.get("/", OrdersController.findAllOrders);
router.post("/", OrdersController.postNewOrder);
// router.delete("/:id",  OrdersController.getDeleteUsers);
// router.put("/:uid", UsersController.updateUser);

module.exports = router