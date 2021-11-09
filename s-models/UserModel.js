// [REQUIRE] //
const mongoose = require('mongoose');
const mongooseFuzzySearch = require('mongoose-fuzzy-search');

// [INIT] //
const defaultImage = 'https://fonts.google.com/icons?selected=Material%20Icons%3Aaccount_circle%3A'

//Define user fields, type-checks and size validation for each //
module.exports = mongoose.model(
    'User',
    mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        email: {
            type: String,
            required: [true, 'Required field'],
            maxlength: 50
        },
        
        username: {
            type: String,
            required: [true, 'Required field'],
            maxlength: 24
        },

        password: {
            type: String,
            required: [true, 'Required field'],
            maxlength: 24
        },

        first_name: {
            type: String,
            default: '',
            maxlength: 24
        },

        last_name: {
            type: String,
            default: '',
            maxlength: 24
        },

        profile_img: {
            type: String,
            default: defaultImage,
            maxlength: 600,
        }
    })
)