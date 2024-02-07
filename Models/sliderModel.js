import mongoose from 'mongoose'

const sliderSchema = new mongoose.Schema({
    img: {
        type: String,
        require: true,
        trim: true
    },
    year: {
        type: Number,
        require: true
    }
}, { timestamps: true })

export default mongoose.model('slider', sliderSchema);