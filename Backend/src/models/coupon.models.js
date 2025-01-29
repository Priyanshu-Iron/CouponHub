import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    couponCode: {
        type: String,
        required: true,
        trim: true,
    },
    place: {
        type: String,
        required: true,
        trim: true,
    },
    couponDescription: {
        type: String,
        required: true,
        trim: true,
    },
    couponValue: {
        type: Number,
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
    },
    userId: { // Add this field to associate the coupon with a user
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

const Coupon = mongoose.model("Coupon", couponSchema);

export { Coupon };