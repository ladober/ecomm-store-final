import * as yup from "yup";

export const loginValidationSchema = yup.object({
  email: yup.string().email("invalid email formast"),
  password: yup
    .string()
    .required()
    .min(7, "password must be at least 7 characters")
    .max(50, "password must be at most 50 characters"),
});
