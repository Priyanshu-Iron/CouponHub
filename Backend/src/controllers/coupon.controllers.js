import { asyncHandler } from "../utils/asynHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Coupon } from "../models/coupon.models.js";
import { uploadOnCLOUDINARY } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { request } from "http";

/**
 * Controller to create a new coupon.
 */
const createCoupon = asyncHandler(async (req, res) => {
    const { name, place, expiryDate, owner } = req.body;
    console.log(request);
    

    // Validate input fields
    if ([name, place, expiryDate, owner].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // Check if a coupon with the same name and owner exists
    const existingCoupon = await Coupon.findOne({ name, owner });
    if (existingCoupon) {
        throw new ApiError(409, "Coupon with the same name and owner already exists");
    }

    let image;
    if (req.file) {
        // Upload image to Cloudinary
        image = await uploadOnCLOUDINARY(req.file.path);
        if (!image) {
            throw new ApiError(400, "Image upload failed");
        }
    }

    // Create a new coupon
    const coupon = await Coupon.create({
        name,
        place,
        expiryDate,
        owner,
        image: image?.url || "",
    });

    return res.status(201).json(new ApiResponse(201, coupon, "Coupon created successfully"));
});

/**
 * Controller to get all coupons.
 */
const getCoupons = asyncHandler(async (req, res) => {
    const coupons = await Coupon.find();

    if (!coupons || coupons.length === 0) {
        throw new ApiError(404, "No coupons found");
    }

    return res.status(200).json(new ApiResponse(200, coupons, "Coupons fetched successfully"));
});

/**
 * Controller to fetch a single coupon by ID.
 */
const getCouponById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const coupon = await Coupon.findById(id);

    if (!coupon) {
        throw new ApiError(404, "Coupon not found");
    }

    return res.status(200).json(new ApiResponse(200, coupon, "Coupon fetched successfully"));
});

/**
 * Controller to update a coupon by ID.
 */
const updateCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, place, expiryDate, owner } = req.body;

    const coupon = await Coupon.findById(id);

    if (!coupon) {
        throw new ApiError(404, "Coupon not found");
    }

    if (req.file) {
        // Update image if a new one is uploaded
        const image = await uploadOnCLOUDINARY(req.file.path);
        if (!image) {
            throw new ApiError(400, "Image upload failed");
        }
        coupon.image = image.url;
    }

    // Update other fields (only if provided in request)
    coupon.name = name || coupon.name;
    coupon.place = place || coupon.place;
    coupon.expiryDate = expiryDate || coupon.expiryDate;
    coupon.owner = owner || coupon.owner;

    await coupon.save();

    return res.status(200).json(new ApiResponse(200, coupon, "Coupon updated successfully"));
});

/**
 * Controller to delete a coupon by ID.
 */
const deleteCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const coupon = await Coupon.findByIdAndDelete(id);

    if (!coupon) {
        throw new ApiError(404, "Coupon not found");
    }

    return res.status(200).json(new ApiResponse(200, {}, "Coupon deleted successfully"));
});

export {
    createCoupon,
    getCoupons,
    getCouponById,
    updateCoupon,
    deleteCoupon,
};