import express from "express";
import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/roleMiddleware.js";
import { getDashboardStats } from "../controllers/adminController.js";

const router = express.Router();

router.get("/stats", protect, adminOnly, getDashboardStats);

export default router;
