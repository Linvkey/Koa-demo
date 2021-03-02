// import mongoose from 'mongoose'
const mongoose = require('mongoose')
//通过Schema的形式建表
let personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

 module.exports = mongoose.model('Person',personSchema)