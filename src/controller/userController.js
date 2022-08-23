import UserServices from "../service/userServices";
import bcrypt from "bcrypt";
import TokenAuth from "../helpers/tokenAuth";

//register User
class UserController {
  static async registerUser(req, res) {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashPassword;
    const newUser = await UserServices.createUser(req);
    if (!newUser) {
      return res.status(404).json({
        message: "failed to Register!!",
      });
    }

    return res.status(201).json({
      message: "Account SuccessFully Created",
      data: newUser,
    });
  }
  //login
  static async loginUser(req, res) {
    const user = await UserServices.loginUser(req);

    if (!user) {
      return res
        .status(400)
        .json({ error: "user not found! kindly register first" });
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      user.password = null;
      const token = TokenAuth.tokenGenerator({ user: user });
      return res
        .status(201)
        .json({ message: "successfully logged in", token: token });
    }

    return res.status(400).json({ error: "invalid email or password" });
  }
  static async getOneUser(req, res) {
    const user = await UserServices.getOneUser(req);
    if (!user) {
      return res.status(404).json({
        message: "User not Found",
      });
    }

    return res.status(201).json({
      message: "User Found",
      data: user,
    });
  }
  static async updateOneUser(req, res) {
    const user = await UserServices.updateOneUser(req);
    if (!user) {
      return res.status(404).json({
        message: "user Not found",
      });
    }

    return res.status(201).json({
      message: "user successfully updated",
      data: user,
    });
  }
  //get all users
  static async getAllUsers(req, res) {
    const users = await UserServices.getAllUser(req);
    if (!users) {
      return res.status(404).json({
        message: "no user find",
      });
    }
    return res.status(201).json({
      message: "all User Find",
      data: users,
    });
  }
}
export default UserController;
