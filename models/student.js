const mongoose = require('mongoose')//we require mongoose library
mongoose.connect('mongodb+srv://nidhitech0510:nidhi@mern-first.n1gft9t.mongodb.net/studentsDB')//connect Employees database

const stuSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {
    collection: "students"//collection(table)
})

module.exports = mongoose.model('students', stuSchema)//any string-->Employees
