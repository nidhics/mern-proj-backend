const controllers = require("../controllers/controllers")
module.exports = (router) => {
    router.get("/", controllers.defaultFun)
    router.get('/getstudents', controllers.getstudents)
    router.post('/getstudents', controllers.addStudent)
}