// [REQUIRE] //
const mongoose = require('mongoose');
const express = require('express');


// [REQUIRE] personal //
const config = require('/s-config/')
// express for local web hosting //
const app = express();


const port = config.PORT;

// set up routes for express //


// set up mongoose connection //
mongoose.connect(
    config.MONGO_URI,
    (err, connected) => {
        if(connected) { console.log('Connected to MongoDB') }
        else { console.log(`MongoDB connect error --> ${err}`) }
    }
)


// listen to port //
app.listen(port, () => { `Server is running on port ${port}`})