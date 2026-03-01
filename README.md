
# WanderLust

WanderLust is a full-stack web application project created to demonstrate web development skills. Inspired by Airbnb, this fictional platform allows users to browse, create, update, and delete listings for vacation homes, as well as add reviews. It serves as a portfolio project showcasing the implementation of CRUD operations, RESTful APIs, and MVC architecture.

## Key Features

- **Comprehensive Listings:** Users can explore, create, edit, and delete vacation rental listings, each with detailed descriptions, images, pricing, and geolocation data.
- **Interactive Reviews:** Guests can leave ratings and feedback on listings, helping others make informed decisions.
- **User Authentication:** Secure signup and login functionality to protect user data and personalize experiences.
- **Responsive Design:** Fully optimized for desktop and mobile devices, ensuring accessibility anywhere.
- **Robust Validation & Error Handling:** All user input is validated and errors are managed gracefully for a smooth experience.
- **GeoJSON Support:** Listing locations are stored using a geometry key, compatible with mapping and geospatial features.

## Technology Stack

- **Frontend:** EJS templating, Bootstrap 5, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Other:** Joi for validation, custom error handling utilities

## Getting Started

1. **Install Node.js and MongoDB** on your system.
2. **Clone the repository** and install dependencies with `npm install`.
3. **Seed the database** with sample data for instant exploration.
4. **Start the application** and visit `http://localhost:8080` in your browser.

## Folder Structure

- `init/` – Database seeding scripts and sample data
- `models/` – Mongoose schemas for listings, reviews, and users
- `public/` – Static assets (CSS, JS, images)
- `routes/` – Express route handlers for all resources
- `views/` – EJS templates for all pages and components
- `utils/` – Utility modules for error handling and async operations
- `app.js` – Main application entry point


## License

This project is for educational and demonstration purposes only.

## 📂 Project Structure

```
WanderLust/
├── init/               # Database initialization scripts
│   ├── data.js         # Sample listing data for seeding (uses geometry key for location)
│   └── index.js        # Script to seed the database
├── models/             # Mongoose schemas
│   ├── listing.js      # Listing model definition
│   └── review.js       # Review model definition
├── public/             # Static assets
│   ├── css/            # Stylesheets
│   └── js/             # Client-side scripts
├── utils/              # Utility functions
│   ├── ExpressError.js # Custom error handling class
│   └── wrapAsync.js    # Async error handling wrapper
├── views/              # EJS templates
│   ├── layouts/        # Base layout templates (e.g., boilerplate)
│   ├── listings/       # Views for listing CRUD operations
│   ├── users/          # User-related views
│   └── includes/       # Partial views (navbar, footer)
├── app.js              # Main application entry point
├── package.json        # Project dependencies and scripts
└── schema.js           # Joi validation schemas
```

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) installed and running locally

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sujan-karmakar/WanderLust.git
    cd WanderLust
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Database Setup:**
    Ensure your local MongoDB instance is running.
    
    *Seed the database with sample data:*
    ```bash
    node init/index.js
    ```

4.  **Start the server:**
    ```bash
    node app.js
    ```
    The application will launch at `http://localhost:8080`.

5.  **Usage:**
    Open your browser and navigate to `http://localhost:8080/listings` to start exploring.
