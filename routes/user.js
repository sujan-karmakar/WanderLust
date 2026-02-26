const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

//SIGNUP
router.get("/signup", userController.renderSignupForm);

router.post(
    "/signup",
    wrapAsync(userController.signup),
);

//LOGIN
router.get("/login", userController.renderLoginForm);

router.post(
    "/login",
    savedRedirectUrl,
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
    wrapAsync(userController.login),
);

router.get("/logout", userController.logout); 


module.exports = router;

