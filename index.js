require('dotenv').config();
const express = require("express")
const router = express.Router()
const routes = require('./routes/routes')
const port = process.env.PORT
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json());//to use json data
routes(router)
app.use('/', router)

app.listen(port, () => {
    console.log("my app is listening on:" + port);
})
