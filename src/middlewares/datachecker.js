import User from "../models/user";

class DataChecker {
  static emailChecker = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    try {
      if (!user) {
        return next();
      }
      return res.status(401).json({
        message: "email already exist",
      });
    } catch (error) {
      console.log(error);
    }
  };
  static phoneChecker = async (req, res, next) => {
    const user = await User.findOne({ phone: req.body.phone });
    try {
      if (!user) {
        return next();
      }
      return res.status(401).json({
        message: "phone already exist",
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export default DataChecker;
