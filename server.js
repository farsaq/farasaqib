console.log("SERVER FILE RUNNING");

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

// DB connect
connectDB();

const app = express();

/* ======================
   ✅ CORS FIX (IMPORTANT)
====================== */
app.use(
  cors({
    origin: "*", // frontend (Vercel) allow
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔥 OPTIONS preflight explicitly allow
app.options("*", cors());

app.use(express.json());

/* ======================
   ROUTES
====================== */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("LMS Backend Server Running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
