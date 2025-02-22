const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT);