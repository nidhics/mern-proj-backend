const mongoose = require('mongoose')//we require mongoose library
mongoose.connect(process.env.DATABASE)//connect Employees database

const stuSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {
    collection: "students"//collection(table)
})

module.exports = mongoose.model('students', stuSchema)//any string-->Employees
