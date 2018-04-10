const mongoose = require('mongoose');
const url = 'mongodb://kiendeptrai:15051998@ds135537.mlab.com:35537/luutru';
mongoose.connect(url);
let schema = new mongoose.Schema({path:String, name: String,url: Array });
let schema2 = new mongoose.Schema({url: Array })

module.exports = {
    sanpham:mongoose.model('members',schema),
    congtrinhnoibat:mongoose.model('congtrinhnoibat',schema2),
}

