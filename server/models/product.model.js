const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please, enter item title"],
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        default: 0.00
    },
    category: {
        type: String,
        required: [true, "Please, select a category"],
    },
    video_url: {
        type: String,
        required: true,
    },
        poster_url: {
        type: String,
    },
});

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;