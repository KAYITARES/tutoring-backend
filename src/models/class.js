import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    className: String,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);
classSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "firstName lastName role email",
  }).populate({
    path: "course",
  });
  next();
});
const classes = mongoose.model("Class", classSchema);
export default classes;
