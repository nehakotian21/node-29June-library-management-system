import mongoose from "mongoose";

// Creating a Schema
const genreSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    description :{
        type: String
    }
})

// Creating a model for the above schema
const Genre = mongoose.model("genre", genreSchema)

export default Genre;