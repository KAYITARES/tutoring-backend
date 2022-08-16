import express from "express";
import { check, validationResult } from "express-validator";

class Validator {
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return res.status(400).json({ message: errorMessage });
    }
    return next();
  };
  static userValidation() {
    return [
      //for user validator
      check("firstName", "first name should be valid").trim().isAlpha(),
      check("lastName", "last name should be valid").trim().isAlpha(),
      check("email", "email is invalid").isEmail(),
      check("password", "password is not strong").trim().isStrongPassword(),
      check("gender", "gender should be among female,male ")
        .trim()
        .isIn(["female", "male"]),
    ];
  }
}
export default Validator;
