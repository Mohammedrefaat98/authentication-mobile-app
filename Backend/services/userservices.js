const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;
class UserServices {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    async get() {
        return await this.UserModel.find();
    }

    async Login(req){
        const user = await this.UserModel.findOne({ email: req.body.email });
        try{
            const match = await bcrypt.compare(req.body.password, user.password);
            if(match){
                const token= jwt.sign(
                    {
                        id: user._id,
                        email: user.email
                    },
                    JWT_SECRET
                )
                return token;
            }
            return null;
        }
        catch(err){
            return null;
        }
    }
    
    async Signup(req){
        const {name,email,password:plainTextpass}=req.body;
        const hashedPassword = await bcrypt.hash(plainTextpass, 10);

        const response = await this.UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        return response;
    }
}

module.exports = UserServices;