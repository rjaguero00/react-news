// Require Mongoose
const mongoose = require("mongoose");

// Create a Schema Class
const Schema = mongoose.Schema;

// Create Article Schema
const articleSchema = new Schema({

    // Title of Article
    title: {
        type: String,
        required: true
    },

    // Date of Article
    date: {
        type: String,
        required: true
    },

    // Link to Article
    url: {
        type: String,
        required: true
    }
});

const Article = mongoose.model("Article", articleSchema); // This creates our model from the above schema, using mongoose's model method

// Export
module.exports = Article;