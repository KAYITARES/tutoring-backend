import { Router } from "express";
import UserController from "../controller/userController";
import ClassController from "../controller/classControler";
import CourseController from "../controller/courseController";
import DataChecker from "../middlewares/datachecker";
import Validator from "../middlewares/validator";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess";

const route = Router();
route.post(
  "/user/register",
  Validator.userValidation(),
  Validator.validateInput,
  DataChecker.emailChecker,
  DataChecker.phoneChecker,
  UserController.registerUser
);
route.post("/user/login", UserController.loginUser);
route.get(
  "/user/all",
  verifyToken,
  verifyAccess("admin"),
  UserController.getAllUsers
);
route.get("/user/:id", UserController.getOneUser);
route.patch("/user/:id", UserController.updateOneUser);

route.post(
  "/course/create",
  verifyToken,
  verifyAccess("admin"),
  CourseController.createCourse
);

route.post(
  "/class/create",
  verifyToken,
  verifyAccess("admin"),
  ClassController.createClass
);

export default route;
