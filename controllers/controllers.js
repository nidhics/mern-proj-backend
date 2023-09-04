const Students = require('../models/student')
exports.defaultFun = (req, res) => {
    res.send("hello how r you?")
}

exports.getstudents = (req, res) => {//all employee from database you are going to get
    // res.send('get emp function')
    Students.find({})
        .then((stuData) => {
            res.send(stuData)
        });
}

exports.addStudent = (req, res) => {
    let stuName = req.body.name;
    let stuAge = req.body.age;
    const stu = new Students();
    stu.name = stuName
    stu.age = stuAge
    stu.save()
        .then((msg) => { res.send(`message: created ${stu.name}`) })
        .catch((err) => { })
}