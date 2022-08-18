import CourseServices from "../service/courseService";

class CourseController {
  static async createCourse(req, res) {
    const course = await CourseServices.createCourse(req);
    if (!course) {
      return res.status(404).json({
        error: "failed to create a course",
      });
    }
    return res.status(201).json({
      message: "course successfully created",
      data: course,
    });
  }
  static async getAllCourses(req, res) {
    const courses = await CourseServices.getAllCourses(req);
    if (!courses) {
      return res.status(404).json({ error: "courses not found" });
    }
    return res
      .status(200)
      .json({ message: "courses successfully retrieved", data: courses });
  }
  static async getOneCourse(req, res) {
    const course = await CourseServices.getOneCourse(req);
    if (!course) {
      return res.status(404).json({ error: "course not found" });
    }
    return res
      .status(200)
      .json({ message: "course found successfully", data: course });
  }
  static async updateOneCourse(req, res) {
    const course = await CourseServices.updateOneCourse(req);
    if (!course) {
      return res.status(404).json({ error: "failed to update the course" });
    }
    return res
      .status(200)
      .json({ message: "The course is successfully updated", data: course });
  }
}
export default CourseController;
