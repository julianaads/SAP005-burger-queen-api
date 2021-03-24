const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.findAll);
// router.get("/:uid", UsersController.PostById);
router.post("/", UsersController.postNewUser);
router.delete("/:postId", UsersController.deleteUser);

module.exports = router