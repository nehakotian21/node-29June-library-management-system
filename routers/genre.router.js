import express from "express";
import { createGenre, fetchGenres, fetchSingleGenre } from "../controllers/genre.controller";

const genreRouter = express.Router()
// base url is http://localhost:8000/api/v1/genre

// Create genre            POST        http://localhost:8000/api/v1/genre
genreRouter.post("/", createGenre)
// Fetch all genre         GET         http://localhost:8000/api/v1/genre
genreRouter.get("/", fetchGenres)
// Fetch single genre      GET         http://localhost:8000/api/v1/genre/id
genreRouter.get("/:id", fetchSingleGenre)
// Update single genre     PUT         http://localhost:8000/api/v1/genre/id
// Delete single genre     DELETE      http://localhost:8000/api/v1/genre/id

export default genreRouter;