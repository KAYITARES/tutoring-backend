import CourseServices from "../service/courseController";

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
}
export default CourseController;
