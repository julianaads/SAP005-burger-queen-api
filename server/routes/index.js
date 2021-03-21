const { Router } = require('express')
const Users = require("./Users")

const router = Router()

// aqui vai todas as rotas
router.use('/Users', Users);
// router.use('/ExampleRouter', ExampleRouter);

module.exports = router
