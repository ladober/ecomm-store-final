import * as yup from "yup";

export const signupValidationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .min(3, "First name should be at least 3 characters")
    .max(50, "Fist name should be at most 50 characters"),
  lastName: yup
    .string()
    .required()
    .min(3, "last name should be at least 3 characters")
    .max(50, "last name shold be at most 50 characters"),
  email: yup.string().email("Invalid email format"),
  password: yup
    .string()
    .required()
    .min(7, "password must be at least 7 characters")
    .max(50, "password must be at most 50 characters"),
});
