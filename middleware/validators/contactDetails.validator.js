import { body } from "express-validator";

export const contactValidationRules = [
  body("name").trim().notEmpty().withMessage("Name is required"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter a valid email"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^\+?\d{10,15}$/)
    .withMessage("Enter a valid phone number"),

  body("purpose")
    .notEmpty()
    .withMessage("Please select a purpose")
    .custom((value) => {
      if (value === "Select a purpose") {
        throw new Error("Please select a valid purpose");
      }
      return true;
    }),
];
