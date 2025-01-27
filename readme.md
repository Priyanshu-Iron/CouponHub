<!-- # CouponHub -->
<!-- ![Alt Text](https://res.cloudinary.com/dkslm53fp/image/upload/v1737990496/CouponHub/uyy5m4os5islybzaf6zd.png) -->
<img src="https://res.cloudinary.com/dkslm53fp/image/upload/v1737990496/CouponHub/uyy5m4os5islybzaf6zd.png" width="200px" height="100">

✨ **CouponHub** is a platform where users can buy, sell, and exchange coupons in an easy and efficient way. It allows users to list their unused coupons for others to purchase or exchange, creating a community-driven marketplace for deals and savings.

## Features

- 🔐 **User Registration & Authentication**: Secure login and registration functionality with    JWT-based authentication (using both refresh and access tokens).
- 🛒 **Coupon Management**: Users can upload, edit, and manage their coupons.
- ⚖️ **Buy/Sell/Exchange**: Exchange unused coupons with other users, or buy/sell them.
- 🖼️ **Image Uploads**: Upload coupon images using Cloudinary integration.
- ⏳ **Real-time Notifications**: Notify users about successful transactions using `notie`.

## Project Structure

The project is divided into two main parts:

### Backend
- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MongoDB

### Frontend
- **Technologies**: HTML, CSS, JavaScript (Frontend details can be added later if React or any framework is used)

## File Structure

```
CouponHub/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── index.js
├── frontend/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── index.html
└── README.md
```

## Installation and Setup

### Prerequisites

- 💻 Node.js (>= 14.x)
- 📃 MongoDB
- ☁️ Cloudinary Account

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd CouponHub/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   REFRESH_TOKEN_SECRET=<your-refresh-token-secret>
   CLOUDINARY_NAME=<your-cloudinary-name>
   CLOUDINARY_API_KEY=<your-api-key>
   CLOUDINARY_API_SECRET=<your-api-secret>
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Open `index.html` in your preferred browser or use a live server for development.

## Dependencies

### Dev Dependencies
- ♻️ **nodemon**: Automatically restart the server on code changes.
- 🔨 **prettier**: Code formatting tool.

### Dependencies
- 🔑 **bcrypt**: For password hashing.
- 🌄 **cloudinary**: For image storage and management.
- 🌀 **cookie-parser**: Parse cookies in HTTP requests.
- ✨ **cors**: Enable cross-origin requests.
- 🔐 **dotenv**: Manage environment variables.
- 🚀 **express**: Web framework for Node.js.
- ⚙️ **jsonwebtoken**: Token-based authentication (access and refresh tokens).
- 📂 **mongoose**: MongoDB object modeling.
- ♾️ **mongoose-aggregate-paginate-v2**: Pagination for aggregate queries in MongoDB.
- 📁 **multer**: Middleware for handling file uploads.
- 🔔 **notie**: Notification library for alerts.

## Authors

- 🔝 **Priyanshu Kumar Singh** (Full Stack Developer)
- 🎮 **Sanjay Bisht** (Backend & Frontend Developer)
- 🎨 **Gautam Singh Rana** (Frontend Developer)

## Contributions

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the ISC License.

## Contact

For any queries, feel free to reach out to us:
- 📧 Priyanshu Kumar Singh: [LinkedIn](https://www.linkedin.com/in/priyanshu-singh-3a6777212/)
- 📧 Sanjay Bisht: [LinkedIn](https://www.linkedin.com/in/sanjay-bisht-80b13025a/)
- 📧 Gautam Singh Rana: [LinkedIn](https://www.linkedin.com/in/gautam-rana-12a2b3257/)

---

🎨 Happy Coding!
