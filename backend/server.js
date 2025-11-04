const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./src/routes/auth');
const contactRoutes = require('./src/routes/contact');
const bookingRoutes = require('./src/routes/booking-working');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
const mongooseOptions = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!mongoUri) {
  console.error('❌ Missing MONGODB_URI/MONGO_URI environment variable');
} else {
  mongoose.connect(mongoUri, mongooseOptions)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));
}

// Middleware
app.use(helmet());
// CORS - configurable allowed origins (comma-separated, supports wildcards like https://*.vercel.app)
const rawOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

const matchesOrigin = (origin) => {
  if (rawOrigins.length === 0) return true; // allow all if not configured
  return rawOrigins.some(pattern => {
    if (!pattern) return false;
    if (pattern === origin) return true;
    // wildcard support
    if (pattern.includes('*')) {
      const escaped = pattern
        .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
        .replace(/\*/g, '.*');
      const re = new RegExp(`^${escaped}$`);
      return re.test(origin);
    }
    try {
      const u1 = new URL(origin);
      const u2 = new URL(pattern);
      return u1.host === u2.host && u1.protocol === u2.protocol;
    } catch {
      return false;
    }
  });
};

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // non-browser or same-origin
    if (matchesOrigin(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
};

const usePermissive = process.env.CORS_PERMISSIVE === 'true';
if (usePermissive) {
  app.use(cors({
    origin: '*',
    credentials: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  }));
  app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    return res.sendStatus(204);
  });
} else {
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions)); // handle preflight globally
  // Ensure CORS headers are always present (defensive)
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && matchesOrigin(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Vary', 'Origin');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    }
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });
}
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Wedding Planner API with MongoDB Atlas is running',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/bookings', bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Wedding Planner API server listening on port ${PORT}`);
  console.log(`📊 Health check available at /api/health`);
  console.log('📝 Available endpoints:');
  console.log('  POST /api/auth/register - User registration');
  console.log('  POST /api/auth/login - User login');
  console.log('  POST /api/contact - Contact form');
  console.log('  POST /api/bookings - Create booking');
  console.log('  GET /api/bookings - Get user bookings');
  console.log('  GET /api/bookings/:id - Get specific booking');
});

module.exports = app;
