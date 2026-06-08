import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Fullname is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Already register with this email."]
    },
    password: {
        type: String,
        required: function(){
            return !this.googleId
        }
    },
    refreshToken: {
        type: String
    },
    googleId: {
        type: String
    }
},
    {
        timestamps: true
    }
);

userSchema.pre('save', async function() {

    if(!this.isModified("password")){
        return;
    }

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;    
});


userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);    
}


const userModel = mongoose.model("User", userSchema);
export default userModel;