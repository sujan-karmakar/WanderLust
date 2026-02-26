const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { validateListing, isLoggedIn, isOwner } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

//Index route
router.get("/", wrapAsync(listingController.index));

//New route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Create route
router.post(
    "/",
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing),
);

//Show route(Read)
router.get("/:id", wrapAsync(listingController.showListing));

//Edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm),
);

//Update route
router.patch(
    "/:id",
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing),
);

//Destroy route
router.delete(
    "/:id",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing),
);

module.exports = router;
