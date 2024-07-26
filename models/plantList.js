const mongoose = require('mongoose')

const whenToFertilizeSchema = new mongoose.Schema(
    {
        nameOfDay: {
            type: String,
            enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        dateOfDay: {
            type: Number,
            min: 1,
            max: 31
        }
    }
)

const whenToWaterSchema = new mongoose.Schema(
    {
        nameOfDay: {
            type: String,
            enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        dateOfDay: {
            type: Number,
            min: 1,
            max: 31
        },
        conditionOfSoil: {
            type: String,
        }
    }
)

const plantListSchema = new mongoose.Schema (
    {
    name: {
        type: String, 
        required: true,
    },
    img: {
        type: String, 
        required: true,
    },
    whenToWater: [
        whenToWaterSchema
    ], 
    whenToFertilize: [
        whenToFertilizeSchema
    ],
    howMuchSun: {
        type: String,
    }, 
    typeOfLight: {
        type: String,
    }, 
    bestSeasonToPlant: {
        type: String,
    },
    indoorOutdoor: {
        type: String,
        enum: ['Indoor','Outdoor']
    },
    growTime: {
        type: String,
    }
    }
)

const PlantList = mongoose.model('Plant List', plantListSchema)

module.exports = PlantList