import Courses from "../models/class";

class CourseServices {
  //create class in db
  static async createCourse(req) {
    //dupassingemo kugirango ibya user ibibike
    req.body.user = req.user._id;
    req.body.class = req.params.id;
    const course = await Courses.create(req.body);
    return course;
  }
  static async getAllCourses(req, res) {
    const courses = await Courses.find();
    return courses;
  }
  static async getOneCourse(req) {
    const course = await Courses.findById(req.params.id);
    return course;
  }
  static async updateOneCourse(req) {
    const course = await Courses.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return course;
  }
}
export default CourseServices;
