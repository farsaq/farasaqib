import express from "express";
import protect from "../middleware/authMiddleware.js";
import { updateProgress } from "../controllers/progressController.js";

const router = express.Router();

router.post("/", protect, updateProgress);

export default router;
