var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    specification:{
        type:String,
        required:true
    },
    productImage:{
        type:String
    },
    productImage2:{
        type:String
    },
    productImage3:{
        type:String
    },
    productImage4:{
        type:String
    },
});

module.exports = mongoose.model('Product', productSchema);