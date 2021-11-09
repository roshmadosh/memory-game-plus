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
            //Query users collection. Awaited to prevent false positive due to premature return
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
    },
    // [CREATE] User //
    c_register: async (username, email, password) => {
        try { 
            // [VALIDATE] username //
            if(!validator.isAscii(username)){
                return {
                    execution: true,
                    status: false,
                    message: 'UserCollection: Invalid username'
                }
            }
            // [VALIDATE] email //
            if(!validator.isEmail(email)){
                return {
                    execution: true,
                    status: false,
                    message: 'UserCollection: Invalid email'
                }
            }
            // [VALIDATE] password //
            if (!validator.isAscii(password)) {
				return {
					executed: true,
					status: false,
					message: 'UserCollection: Invalid password'
				}
			}
            // Check availability username //
            if(await UserModel.findOne( { username })) {
                return {
                    executed: true,
                    status: true,
                    message: 'That username is taken',
                    created: false
                }
            }
            // Check availability email //
            if(await UserModel.findOne( { email })) {
                return {
                    executed: true,
                    status: true,
                    message: 'That username is taken',
                    created: false
                }
            }
            // [ENCRYPT] password //
            const hashedPassword = await bcyrpt.hash(password, 10);
            // [SAVE] user //
            const user = await new UserModel({
                _id: mongoose.Types.ObjectId,
                username,
                email,
                password: hashedPassword
            }).save();

            return {
                execution: true,
                status: true,
                message: 'userCollections: user created!',
                created: true,
                user: user
            }
        } catch (err) {
            return {
                execution: false,
                status: false,
                message: `userCollections Error --> ${err}`
            }
        }
    }


    

}