const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({// mongodb tu dong them id
    // _id
    code: {
        type: String,
        required: [true, 'Truong nay bat buoc phai nhap'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Truong nay bat buoc phai nhap'],
        unique: true,
        minLength: 10,
        maxLength: 255,
    },
    data: {
        type: Date,
        required: [true, 'This field must be entered'],
    },
    price: {
        type: Number,
        required: [true, 'This field must be entered'],
        minLength: [0, 'minimum value is 0'],
    },
    quantity: {
        type: Number,
        required: [true, 'This field must be entered'],
        minLength: [0, 'minimum value is 0'],
    },
    storecode: {    
        type: String,
        required: [true, 'This field must be entered'],
    },
});
module.exports = mongoose.model("Product", product_schema);