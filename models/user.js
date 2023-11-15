import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    username:String,
    telephone: String,
    password: String,
    avatar: {type: String, default: 'default.png'},
})

userSchema.index({id: 1})

const User = mongoose.model('User', userSchema);

export default User