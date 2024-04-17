const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
require('dotenv').config();

const app = express();

const connectionString = process.env.ATLAS_URI || "";
const PORT = process.env.PORT || 5050;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/api/v1/products", productRoute);

// Home route
app.use('/', (req, res) => {
    res.send("Hello from Node API...");
});

// Connect to MongoDB & serve
mongoose.connect(connectionString)
.then(() => {
    console.log("Connected to MongoDB..");
    app.listen(PORT, () => {
        console.log(`Server is up on port ${PORT}`);
    });
})
.catch((e) => {
    console.error("MongoDB connection failed: ", e);
})