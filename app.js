const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(`Error : ${err}`);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hi");
});

//Index route
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
}));

//New route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

//Create route
app.post(
    "/listings",
    wrapAsync(async (req, res) => {
        if(!req.body.listing) {
            throw new ExpressError(400, "Send valid data for listing");
        }
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);

//Show route(Read)
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));

//Edit route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//Update route
app.patch("/listings/:id", wrapAsync(async (req, res) => {
    if(!req.body.listing) {
            throw new ExpressError(400, "Send valid data for listing");
        }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

//Destroy route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(`Deleted : ${deletedListing}`);
    res.redirect("/listings");
}));



//Page not found
app.all("/*splat", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});




app.use((err, req, res, next) => {
    let { statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).send(message);
});
