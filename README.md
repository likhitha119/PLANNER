# Wedding Planner - Full Stack Application

A complete responsive wedding planner website built with React frontend and Node.js backend with MongoDB Atlas database.


Demo link: https://planner-fyv2.vercel.app/

## 🚀 Features

### Frontend (React)
- **Responsive Design**: Beautiful, mobile-first design
- **Interactive Components**: Swiper sliders, theme toggler, smooth scrolling
- **User Authentication**: Login/Signup with JWT tokens
- **Wedding Booking System**: Complete booking form with payment options
- **Contact Form**: Direct communication with backend
- **Gallery**: Stunning photo gallery
- **Services Showcase**: Detailed service offerings
- **Client Reviews**: Testimonial slider

### Backend (Node.js + Express)
- **MongoDB Atlas Integration**: Cloud database storage
- **User Authentication**: Secure registration and login with bcrypt
- **JWT Token Management**: Secure session handling
- **Wedding Bookings**: Complete booking management system
- **Contact Messages**: Store and manage contact inquiries
- **Input Validation**: Comprehensive data validation
- **Error Handling**: Robust error management
- **CORS Support**: Cross-origin resource sharing

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Swiper.js for sliders
- Axios for API calls
- React Hot Toast for notifications
- Vite for build tool

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Express Validator for input validation
- CORS, Helmet, Morgan for security and logging

## 📁 Project Structure

```
├── server/                 # Backend Node.js application
│   ├── src/
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   └── controllers/   # Route controllers
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── styles/        # CSS styles
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── index.html         # Main HTML file
└── FSDAssignment5/        # Original static files (reference)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd FSD_Assignment-5-main
```

### 2. Set Up MongoDB Atlas
1. Create a MongoDB Atlas account at https://www.mongodb.com/atlas
2. Create a new cluster (free tier available)
3. Create a database user with read/write permissions
4. Get your connection string
5. Whitelist your IP address (or use 0.0.0.0/0 for development)

### 3. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/wedding-planner?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-in-production
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### 4. Frontend Setup
```bash
cd ../client
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 5. Copy Assets
Copy all images from `FSDAssignment5/PHOTOS/` to `client/public/assets/photos/`

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Contact
- `POST /api/contact` - Submit contact form

### Bookings
- `POST /api/bookings` - Create wedding booking
- `GET /api/bookings` - Get user bookings (authenticated)
- `GET /api/bookings/:id` - Get specific booking

### Health Check
- `GET /api/health` - Server health status

## 🎨 Design Features

- **Dark Theme**: Elegant dark color scheme
- **Responsive Layout**: Works on all device sizes
- **Smooth Animations**: CSS transitions and transforms
- **Interactive Elements**: Hover effects and smooth scrolling
- **Modern UI**: Clean, professional design
- **Theme Customization**: Color theme toggler

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Helmet security headers
- Environment variable protection

## 📱 Pages

1. **Home** - Hero slider, services, about, gallery, pricing, reviews, contact
2. **About** - Detailed company information and services
3. **Login** - User authentication
4. **Signup** - User registration
5. **Checkout** - Wedding booking form with payment options

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB Atlas is accessible
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or GitHub Pages
3. Update API endpoints to point to your deployed backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Created by **Team 1** - Full Stack Development Assignment

## 🆘 Support

For support and questions:
- Email: support@letscelebratetogether.com
- Phone: +91 1234567891

---

**Let's Celebrate Together** - Making your dream wedding a reality! 💍✨
