const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.findAll);
router.post("/", UsersController.postNewUser);
// router.delete("/:id", UsersController.getDeleteUsers);

module.exports = router