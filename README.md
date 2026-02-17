# WanderLust

WanderLust is a comprehensive full-stack web application designed for listing and renting vacation homes, drawing inspiration from platforms like Airbnb. It serves as a robust platform for property management where users can discover, create, modify, and remove listings, in addition to sharing their experiences through reviews.

## 🚀 Features

### **Listings Management**
- **Browse:** Explore a diverse collection of vacation rentals.
- **Create:** Publish new properties with comprehensive details including title, description, images, pricing, location, and country.
- **Update:** modify listing information to keep it current.
- **Delete:** Remove listings when they are no longer available. Deleting a listing cascadingly removes all associated reviews.

### **Review System**
- **Add Reviews:** Rate properties and leave detailed feedback.
- **Delete Reviews:** Remove feedback if necessary.

### **Technical Highlights**
- **MVC Architecture:** Structured using the Model-View-Controller pattern for maintainability and scalability.
- **RESTful API:** Clean and standard RESTful routes for all resource interactions.
- **Database Relationships:** Implements complex One-to-Many relationships between Listings and Reviews using MongoDB.
- **Data Validation:** Robust server-side validation using **Joi** ensures data integrity before it reaches the database.
- **Error Handling:** Centralized error handling with custom `ExpressError` classes and async wrappers for stability.
- **Responsive UI:** Built with **Bootstrap 5** for a seamless experience across desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend:**
  - HTML5, CSS3, JavaScript
  - [EJS (Embedded JavaScript)](https://ejs.co/) templating engine
  - [Bootstrap 5](https://getbootstrap.com/) framework
  - FontAwesome for iconography

- **Backend:**
  - [Node.js](https://nodejs.org/) runtime environment
  - [Express.js](https://expressjs.com/) framework

- **Database:**
  - [MongoDB](https://www.mongodb.com/) NoSQL database
  - [Mongoose](https://mongoosejs.com/) ODM for schema modeling

## 📂 Project Structure

```
WanderLust/
├── init/               # Database initialization scripts
│   ├── data.js         # Sample listing data for seeding
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
    
    *(Optional) Seed the database with sample data:*
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
