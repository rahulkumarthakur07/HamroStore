# 🛍️ HamroStore - MERN E-Commerce Platform

HamroStore is a full-stack **MERN E-commerce application** designed to replicate a real-world online store.  
It features secure authentication, product management, shopping cart, and order processing with admin controls.  
This project is part of my journey to strengthen my **MERN stack development skills** and showcase my ability to build scalable, modern applications.  

---

## ✨ Features

### 👤 User Features
- User registration & login with **JWT authentication**
- Secure password hashing with **bcrypt**
- Profile management
- Browse products with details
- Add to cart & update quantities
- Checkout process with order summary
- Payment gateway integration (Stripe/PayPal ready)

### 🛠 Admin Features
- Admin dashboard to manage users
- Create, update, and delete products
- View and process customer orders
- Role-based access control (Admin/User)

### 🔑 Security
- JWT authentication & authorization
- Encrypted passwords
- Protected API routes

### ⚡ Performance
- RESTful API with Express
- Optimized MongoDB queries
- Efficient frontend with React + Vite

---

## 🛠 Tech Stack

**Frontend:**  
- React (Vite)  
- React Router  
- Axios  
- TailwindCSS / CSS  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  
- JWT Authentication  

**Other Tools & Utilities:**  
- Postman (API testing)  
- ESLint + Prettier (code quality)  
- Git & GitHub (version control)  

---

## 📂 Folder Structure

HamroStore/
┣ backend/
┃ ┣ config/ # Database & environment config
┃ ┣ controllers/ # Business logic for routes
┃ ┣ middlewares/ # Auth & error handling
┃ ┣ models/ # MongoDB models
┃ ┣ routes/ # API routes
┃ ┗ server.js # Entry point
┣ frontend/
┃ ┣ public/ # Static assets
┃ ┣ src/
┃ ┃ ┣ components/ # Reusable components
┃ ┃ ┣ pages/ # Application pages
┃ ┃ ┣ context/ # State management
┃ ┃ ┗ App.jsx # Root component
┃ ┗ vite.config.js
┣ docs/ # Screenshots & diagrams (optional)
┣ .env.example
┣ .gitignore
┣ package.json
┣ README.md



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/rahulkumarthakur07/HamroStore.git
cd HamroStore


2️⃣ Install dependencies

From the root:

npm install

3️⃣ Environment Variables

Create a .env file inside backend/ using .env.example as reference:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_key
PAYPAL_CLIENT_ID=your_paypal_client_id
PORT=5000

4️⃣ Run the project

You can run frontend and backend separately or together.

Run backend only:

npm run backend


Run frontend only:

npm run frontend


Run both (recommended):

npm run dev


By default:

Backend runs on → http://localhost:5000

Frontend runs on → http://localhost:5173

📌 Roadmap / Future Improvements

 Product reviews & ratings

 Advanced search and filtering

 Wishlist functionality

 Order email notifications

 Deployment (Frontend + Backend)

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

📄 License

This project is licensed under the MIT License – see the LICENSE
 file for details.

👨‍💻 Author

Rahul Kumar Thakur barahi

🔗 GitHub

💼 Aspiring MERN Stack Developer
