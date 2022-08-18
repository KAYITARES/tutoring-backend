import ClassServices from "../service/classServices";

class ClassController {
  static async createClass(req, res) {
    const clas = await ClassServices.createClass(req);
    if (!clas) {
      return res.status(404).json({ error: "class not created" });
    }
    return res
      .status(201)
      .json({ message: "class created successfully", data: clas });
  }
  static async getAllClasses(req, res) {
    const classes = await ClassServices.getAllClasses(req);
    if (!classes) {
      return res.status(404).json({ error: "classes not found" });
    }
    return res
      .status(200)
      .json({ message: "classes found successfully", data: classes });
  }
  static async getOneClass(res, req) {
    const clas = await ClassServices.getOneClass(req);
    if (!clas) {
      return res.status(404).json({ error: "class not found" });
    }
    return res
      .status(200)
      .json({ message: "class found successfully", data: clas });
  }
}
export default ClassController;
