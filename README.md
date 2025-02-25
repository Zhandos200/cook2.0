# cook2.0
# Recepie Sharing Site

A full-stack web application for sharing recipes, featuring user authentication, favorites management, and dynamic content rendered with EJS.

## Overview

This project is a recipe sharing platform where users can:
- Browse a collection of recipes.
- Register, log in, and manage their profiles.
- Mark recipes as favorites.
- View their favorite recipes on their profile page.

The backend is built using Node.js, Express, and MongoDB (with Mongoose), while the frontend is rendered using EJS templates and styled with Bootstrap.

## Features

- **User Authentication:** Secure registration and login with password hashing and session-based authentication.
- **Recipe Management:** View a list of recipes and detailed pages for each recipe.
- **Favorites:** Mark recipes as favorites. Favorites are stored in MongoDB and displayed on the user's profile page.
- **Responsive Design:** The UI is built using Bootstrap for a mobile-friendly experience.
- **2-Factor Authentication (2FA):** Optional two-factor authentication using TOTP and QR code generation (with speakeasy and qrcode).

## Technologies Used

- **Backend:** Node.js, Express, Mongoose, MongoDB, JWT, bcrypt, express-session
- **Frontend:** EJS, HTML, CSS, Bootstrap, JavaScript
- **Other Tools:** Multer for file uploads, Speakeasy and QRCode for 2FA

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/recepie-sharing-site.git
   cd recepie-sharing-site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Seed the Database (Optional):**

   To populate the database with test recipes, run:

   ```bash
   node seed.js
   ```

5. **Start the Application:**

   ```bash
   node server.js
   ```

6. **Access the App:**

   Open your browser and go to `http://localhost:3000`.

## Folder Structure

```
recepie-sharing-site/
├── models/
│   ├── Recipe.js
│   ├── User.js
│   └── Favorite.js
├── routes/
│   ├── favorites.js
│   └── (other route files)
├── views/
│   ├── index.ejs
│   ├── profile.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── (other EJS templates)
├── public/
│   ├── css/
│   ├── js/
│   └── uploads/
├── seed.js
├── server.js
├── auth.js
└── README.md
```

## API Endpoints

- **User Authentication:**
  - `GET /login` - Login page.
  - `POST /login` - Login action.
  - `GET /register` - Registration page.
  - `POST /register` - Register a new user.
  - `GET /logout` - Log out the user.

- **Recipe Routes:**
  - `GET /recipes` - Display all recipes.

- **Favorites:**
  - `POST /favorites/add` - Add a recipe to favorites.
  - `GET /profile` - View user profile and favorite recipes.

## Usage

1. **Register and Log In:**  
   Create a new account or log in with existing credentials.

2. **Browse Recipes:**  
   View available recipes on the homepage or recipes page.

3. **Add Favorites:**  
   Click the "Favorite" button on any recipe card. This action sends a POST request to `/favorites/add` and stores the recipe name in the favorites collection.

4. **View Favorites:**  
   Navigate to your profile page to see a list of your favorite recipes.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [Bootstrap](https://getbootstrap.com/)

