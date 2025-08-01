import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import bodyParser from "body-parser";
import AuthRouter from './Routes/AuthRouter.js'

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

//body-parser
app.use(bodyParser.json());

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Online Learning Marketplace API",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      courses: "/api/courses",
      orders: "/api/orders",
      reviews: "/api/reviews",
      certificates: "/api/certificates",
      coupons: "/api/coupons",
      assignments: "/api/assignments",
    },
  });
});


app.use('/auth',AuthRouter)

// Health check endpoint
// app.get("/health", (req, res) => {
//   res.json({
//     status: "OK",
//     timestamp: new Date().toISOString(),
//     uptime: process.uptime(),
//   });
// });

// 404 handler
// app.use("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "API endpoint not found",
//   });
// });

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : {},
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
