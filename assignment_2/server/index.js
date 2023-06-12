import 'dotenv/config'
import express from 'express';
const app = express();
import Movie from './models/Movie.js';
import mongoose from "mongoose";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/get-movies', async (req, res) => {
    try {
        if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.MONGO_DB_URL || '')
        }
        const movies = await Movie.find()
        return res.json({ success: true, movies: movies })
    } catch (err) {
        console.log(err)
        return res.status(504).json({ success: false, movies: [] })
    }
})

app.listen(3002, console.log('listening on port 3002'))