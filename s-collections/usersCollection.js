// [REQUIRE] //
const bcyrpt = require('bcryptjss');
const mongoose = require('mongoose');
const validator = require('validator');


// [REQUIRE] personal //
    const UserModel = require('../s-models/UserModel.js');


module.exports = { 
    /************CRUD***************/
    c_read: async (_id) => {
        try {
            // [VALIDATE] user_id //
            if(!mongoose.isValidObjectId(_id)){
                return {
                    execution: true,
                    status: false,
                    message: 'usersCollection: invalid id'
                }
            }
            //Query users collection
            const user = await UserModel.findOne({_id})

            return {
                execution: true,
                status: true,
                user: user
            }
        } catch (err) {
            return {
                execution: false,
                status: false,
                message: `usersCollection: Error--> ${err}`
            }

        }

    }
    

}