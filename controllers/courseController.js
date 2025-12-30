import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
  const { title, description } = req.body;

  const course = await Course.create({
    title,
    description,
    createdBy: req.user._id,
  });

  res.status(201).json(course);
};

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};
import cloudinary from "../config/cloudinary.js";
import Course from "../models/Course.js";

export const uploadVideo = async (req, res) => {
  const { courseId, title } = req.body;

  const result = await cloudinary.uploader.upload(req.file.path, {
    resource_type: "video",
  });

  const course = await Course.findById(courseId);

  course.modules.push({
    title,
    videoUrl: result.secure_url,
  });

  await course.save();

  res.json({ message: "Video uploaded successfully" });
};
