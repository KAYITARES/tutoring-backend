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
}
export default ClassController;
