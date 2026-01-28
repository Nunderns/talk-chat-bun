import mongoose, { Schema, type Document } from "mongoose";

export interface IUser extends Document {
    clerkID: string;
    name: string;
    email: string;
    avatar?: string;
    createAt: Date;
    updateAt: Date;
}

const UserSchema = new Schema <IUser> ({
    clerkID: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const User = mongoose.model<IUser>("User", UserSchema);