// A seed file is used to insert default records into a database.
// This seed file is used to insert a default admin user into the database when the application starts.

import User from './models/User.js';
import bcrypt from 'bcrypt';
import connectToDatabase from './db/db.js';

const userRegister = async ()=>{ //This function is async because it performs database operations (which take time).
        connectToDatabase()
    try{
        const hashPassword = await bcrypt.hash("admin",10)
        //The password "admin" is hashed using bcrypt.hash(password, saltRounds). 10 is the salt rounds, making the password more secure.
        // This ensures that the password is not stored in plain text.
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
    }
    catch(error){
        console.log(error)
    }
}
userRegister();