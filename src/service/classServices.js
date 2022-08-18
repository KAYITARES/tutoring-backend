import Classes from "../models/class";

class ClassServices {
  //create class in db
  static async createClass(req) {
    //dupassingemo kugirango ibya user ibibike
    req.body.user = req.user._id;
    req.body.params = req.params.id;
    const clas = await Classes.create(req.body);
    return clas;
  }
}
export default ClassServices;
