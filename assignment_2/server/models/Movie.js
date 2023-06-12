import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    released_date: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);