import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,

      ref: "User",
    },
    class: {
      type: mongoose.Schema.ObjectId,

      ref: "Class",
    },
    courseName: String,
    content: String,
    coursestatus: {
      type: String,
      enum: ["Enable", "Disable"],
      default: "Enable",
    },
    duration: String,
  },
  { timestamps: true }
);
courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",

    select: "names phone email role ",
  }).populate({
    path: "class",
    select: "className",
  });
  next();
});
const courses = mongoose.model("Course", courseSchema);

export default courses;
