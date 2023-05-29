const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
        trim: true // remove all white spaces in the beginning and end of the string
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty']
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true, // remove all white spaces in the beginning and end of the string
        required: [true, 'A tour must have a description']
    },
    description: {
        type: String,
        trim: true // remove all white spaces in the beginning and end of the string
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a cover image']
    },
    images: [String], // array of strings
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false // hide this field from the output
    },
    startDates: [Date] // array of dates
}, {
    toJSON: { virtuals: true }, // show virtual properties in the output
})

tourSchema.virtual('durationWeeks').get(function() {
    return this.duration / 7;
})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;