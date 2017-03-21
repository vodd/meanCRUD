const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var postSchema = new Schema({
    title: { type: String},
    des: { type: String},
    category:String,
    img: { type: Array}
})

module.exports = mongoose.model('posts',postSchema);