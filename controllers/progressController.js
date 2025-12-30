import Progress from "../models/Progress.js";

export const updateProgress = async (req, res) => {
  const { courseId, moduleIndex } = req.body;

  let progress = await Progress.findOne({
    userId: req.user._id,
    courseId,
  });

  if (!progress) {
    progress = await Progress.create({
      userId: req.user._id,
      courseId,
      completedModules: [moduleIndex],
      progressPercent: 0,
    });
  } else if (!progress.completedModules.includes(moduleIndex)) {
    progress.completedModules.push(moduleIndex);
  }

  progress.progressPercent =
    (progress.completedModules.length / 10) * 100;

  await progress.save();
  res.json(progress);
};
