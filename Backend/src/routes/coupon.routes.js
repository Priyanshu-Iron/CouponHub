import { Router } from "express";
import {
    createCoupon,
    getCoupons,
    getCouponById,
    updateCoupon,
    deleteCoupon,
    getUserCoupons,
} from "../controllers/coupon.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Create new coupon
router.post("/", verifyJWT, upload.single("image"), createCoupon);

// Get all coupons
router.get("/", verifyJWT, getCoupons);

// Get user-specific coupons - Move this BEFORE the /:id route
router.get("/user/coupons", verifyJWT, getUserCoupons);

// Routes with parameters should come last
router.get("/:id", verifyJWT, getCouponById);
router.patch("/:id", verifyJWT, upload.single("image"), updateCoupon);
router.delete("/:id", verifyJWT, deleteCoupon);

export default router;