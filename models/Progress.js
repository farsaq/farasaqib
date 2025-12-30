import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    completedModules: [{ type: Number }],
    progressPercent: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Progress", progressSchema);
