import User from "../models/User.js";
import Course from "../models/Course.js";

export const getDashboardStats = async (req, res) => {
  const totalUsers = await User.countDocuments({ role: "student" });
  const totalCourses = await Course.countDocuments();

  res.json({
    totalUsers,
    totalCourses,
  });
};
