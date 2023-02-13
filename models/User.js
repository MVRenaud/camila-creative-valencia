const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
        firstname: { 
            type: String, 
            required: true, 
            unique:true},
        lastname: { 
            type: String, 
            required: true, 
            unique:true},
        username: { 
            type: String, 
            required: true, 
            unique:true},
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default:false,
        },
        img:{type:String}
    
    },
    {timestamps: true}
);

const User = model("User", UserSchema);

module.exports = User;