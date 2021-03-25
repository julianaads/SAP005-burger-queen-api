const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.findAll);
router.get("/:uid", UsersController.usersById);
router.post("/", UsersController.postNewUser);
router.delete("/:uid", UsersController.deleteUser);
router.put("/:uid", UsersController.updateUser);

module.exports = router