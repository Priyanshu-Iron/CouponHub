import { Router } from "express";
import {
    createCoupon,
    getCoupons,
    getCouponById,
    updateCoupon,
    deleteCoupon,
} from "../controllers/coupon.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @route POST /api/coupons
 * @desc Create a new coupon
 * @access Private
 */
router.post("/", verifyJWT, upload.single("image"), createCoupon);

/**
 * @route GET /api/coupons
 * @desc Get all coupons
 * @access Private
 */
router.get("/", verifyJWT, getCoupons);

/**
 * @route GET /api/coupons/:id
 * @desc Get a specific coupon by ID
 * @access Private
 */
router.get("/:id", verifyJWT, getCouponById);

/**
 * @route PATCH /api/coupons/:id
 * @desc Update a specific coupon by ID
 * @access Private
 */
router.patch("/:id", verifyJWT, upload.single("image"), updateCoupon);

/**
 * @route DELETE /api/coupons/:id
 * @desc Delete a specific coupon by ID
 * @access Private
 */
router.delete("/:id", verifyJWT, deleteCoupon);

export default router;
