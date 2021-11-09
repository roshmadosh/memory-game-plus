// [REQUIRE] //
require('dotenv').config;

module.exports = { 
    // [MONGODB] //
    MONGO_URI: process.env.MONGO_URI || '',
    // [PORT] //
    PORT: process.env.PORT || 5000,
}