import Genre from "../models/genre.model";

// Create genre - POST - http://localhost:8000/api/v1/genre
export const createGenre = async(req, res) =>{
    try{
        const {name, description} = req.body
        const newGenre = await Genre.create({name, description})
        return res.status(201).json({
            genre: newGenre,
            message: "Genre created successfully",
            success: true
        })
    }catch(err){
        console.log(err)

        return res.status(500).json({
            message: "Something went wrong while trying to create a genre.",
            success: false
        })
    }
}

// Fetch all genre         GET         http://localhost:8000/api/v1/genre
export const fetchGenres =async (req, res) =>{
    try{
        const genres = await Genre.find()
        return res.status(200).json({
            data : genres,
            message: "All genres fetched.",
            success: true
        })
    }catch(err){
        console.log(err)

        return res.status(500).json({
            message: "Something went wrong while trying to fetch all genres.",
            success: false
        })
    }
}

// Fetch single genre      GET         http://localhost:8000/api/v1/genre/id
export const fetchSingleGenre =async (req, res) =>{
    try{
        const {id} = req.params
        console.log(id)
        const genres = await Genre.findById(id)
        // const genres = await Genre.find({_id: id})
        return res.status(200).json({
            data : genres,
            message: "Genre fetched.",
            success: true
        })
    }catch(err){
        console.log(err)

        return res.status(500).json({
            message: "Something went wrong while trying to fetch all genres.",
            success: false
        })
    }
}

// Update single genre     PUT         http://localhost:8000/api/v1/genre/id

// Delete single genre     DELETE      http://localhost:8000/api/v1/genre/id