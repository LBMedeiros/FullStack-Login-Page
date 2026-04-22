# Atlas - Authentication System

A modern full-stack authentication application built with **React** and **Node.js/Express**. Features JWT-based authentication, secure password hashing with bcrypt, and smooth animated login transitions.

## 🚀 Features

- **User Registration**: Create new user accounts with email and password
- **Secure Login**: JWT token-based authentication with bcrypt password hashing
- **Protected Routes**: Dashboard accessible only with valid authentication token
- **Animated Transitions**: Smooth login-to-dashboard transition animations
- **CORS Enabled**: Frontend and backend communication with cross-origin support
- **Environment Configuration**: Secure environment variable management with dotenv

## 📁 Project Structure

```
tela-login/
├── backend/                 # Express.js API server
│   ├── server.js           # Main server file
│   ├── routes/
│   │   └── auth.js         # Authentication routes (login, register, dashboard)
│   ├── middleware/
│   │   └── auth.js         # JWT verification middleware
│   ├── package.json
│   └── node_modules/
│
├── frontend/               # React + Vite application
│   ├── src/
│   │   ├── main.jsx        # Entry point
│   │   ├── App.jsx         # Main app component
│   │   ├── pages/
│   │   │   ├── Login.jsx   # Login page with animations
│   │   │   └── Dashboard.jsx # Protected dashboard page
│   │   └── assets/
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   └── index.html
│
├── .gitignore              # Git ignore rules
└── README.md
```

## 🛠️ Tech Stack

### Backend

- **Express.js** - Web framework
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **nodemon** - Development server auto-reload

### Frontend

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **ESLint** - Code quality

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd tela-login
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

## 🚀 Running the Application

### Start the Backend Server

```bash
cd backend
npm run dev
```

The server will run on `http://localhost:3000`

### Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is in use)

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```env
# Example .env file
JWT_SECRET=your-secret-key-here
PORT=3000
```

## 🔐 API Endpoints

### Authentication Routes

#### Register a new user

```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Login

```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Access Protected Dashboard

```
GET /auth/dashboard
Authorization: Bearer <token>
```

## 🎨 Features Explained

### Login Flow

1. User enters email and password on the login page
2. Credentials are sent to the backend for validation
3. If valid, a JWT token is generated and returned
4. Token is stored in localStorage for future requests
5. Smooth animation transitions to the dashboard
6. Dashboard displays personalized welcome message

### Security

- Passwords are hashed using bcrypt with salt rounds of 10
- JWT tokens expire after 1 hour
- Token verification middleware protects routes
- CORS is configured for controlled cross-origin access

## 🧪 Testing

To test the application:

1. **Register**: Go to the login page and register with a new email
2. **Login**: Use the registered credentials to log in
3. **Dashboard**: After successful login, you'll be redirected to the dashboard
4. **Token Verification**: The dashboard verifies your JWT token on each access

## 📦 Build for Production

### Frontend Build

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Backend

The backend can be deployed directly with `npm install` and `npm run dev` or using production process managers like PM2.

## 🐛 Troubleshooting

- **Port 3000 already in use**: Change the port in `backend/server.js`
- **CORS errors**: Ensure frontend is running on the correct URL in `Login.jsx`
- **Token not saving**: Check if localStorage is enabled in your browser
- **Login not working**: Verify backend is running and accessible

## 📝 Future Enhancements

- Add database integration (MongoDB, PostgreSQL)
- Implement refresh tokens
- Add user profile management
- Password reset functionality
- Email verification
- Two-factor authentication
- Dark mode toggle

## 📄 License

ISC License

## 👤 Author

Created with ❤️

---

**Happy Coding!** 🚀
