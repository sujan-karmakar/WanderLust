const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");


const listingRoutes = require("./routes/listing.js");
const reviewRoutes = require("./routes/review.js");

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


//Routes
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);


//Page not found
app.all("/*splat", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
});



