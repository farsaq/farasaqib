import express from "express";
import {
  createCourse,
  getCourses,
  enrollCourse,
} from "../controllers/courseController.js";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/roleMiddleware.js";


const router = express.Router();
// public
router.get("/", getCourses);

// admin only
router.post("/", protect, adminOnly, createCourse);

// logged-in user
router.post("/:id/enroll", protect, enrollCourse);

// public
router.get("/", getCourses);

// protected
router.post("/", protect, createCourse);
router.post("/:id/enroll", protect, enrollCourse);

export default router;
