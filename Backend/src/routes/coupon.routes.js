import { Router } from "express";
import {
    createCoupon,
    getCoupons,
    getCouponById,
    updateCoupon,
    deleteCoupon,
    getUserCoupons,
    getOtherUserCoupons,
    requestCouponAccess
} from "../controllers/coupon.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Create new coupon
router.post("/", verifyJWT, upload.single("image"), createCoupon);

// Get all coupons
router.get("/", verifyJWT, getCoupons);

// Get other users' coupons - Place specific routes before parameter routes
router.get("/others", verifyJWT, getOtherUserCoupons);

// Get user-specific coupons
router.get("/user/coupons", verifyJWT, getUserCoupons);

// Request access to a coupon
router.post("/request-access/:id", verifyJWT, requestCouponAccess);

// Routes with parameters should come last
router.get("/:id", verifyJWT, getCouponById);
router.patch("/:id", verifyJWT, upload.single("image"), updateCoupon);
router.delete("/:id", verifyJWT, deleteCoupon);

export default router;