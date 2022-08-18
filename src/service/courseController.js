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
}
export default CourseServices;
