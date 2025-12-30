import express from "express";
import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/roleMiddleware.js";
import { createCourse, getCourses } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", protect, adminOnly, createCourse);

export default router;
import upload from "../middleware/uploadMiddleware.js";
import { uploadVideo } from "../controllers/courseController.js";

router.post(
  "/upload-video",
  protect,
  adminOnly,
  upload.single("video"),
  uploadVideo
);
