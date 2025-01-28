import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    place: {
        type: String,
        required: true,
        trim: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    owner: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: false,
    }
}, { timestamps: true });

const Coupon = mongoose.model("Coupon", couponSchema);

export { Coupon }; // Make sure this export statement is present