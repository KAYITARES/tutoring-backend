import User from "../models/user";

class UserServices {
  static async createUser(req) {
    const user = await User.create(req.body);
    return user;
  }
  //login
  static async loginUser(req) {
    const user = await User.findOne({ email: req.body.email });
    return user;
  }
  static async getAllUser(req) {
    const users = await User.find();
    return users;
  }
  static async getOneUser(req) {
    const user = await User.findById(req.params.id);
    return user;
  }
  static async updateOneUser(req) {
    const tour = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return tour;
  }
}
export default UserServices;
