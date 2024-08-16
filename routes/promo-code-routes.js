// routes/promoCodeRoutes.js

const express = require("express");
const router = express.Router();
const promoCodeController = require("../controller/Promo-Code-controller.js");



router.post("/book/create-coupon-code", promoCodeController.addCouponCodeDiscount);
router.get(
    "/book/get-all-coupon-code",
    promoCodeController.getAllCouponCodes
);
router.get("/book/search-coupon-code", promoCodeController.SearchCouponCode);
router.put("/book/update-coupon-code/:id", promoCodeController.updateCouponCode);
router.delete("/book/delete-coupon-code/:id", promoCodeController.deleteCouponCode);
// Route to create a coupon
router.post('/book/coupons', promoCodeController.addCouponCodeDiscount);

// Route to apply a coupon
// router.post('/book/apply-coupon', promoCodeController.applyCouponCode);

module.exports = router;