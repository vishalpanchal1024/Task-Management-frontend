import * as yup from "yup";

export const RegisterValidation = yup.object({
    fullname: yup.string().required('Full Name is Required '),
    username:yup.string().min(2).required("Username must be Required"),
    email:yup.string().email("Enter valid Email address").required("Email must be required"),
    password:yup.string().min(4).max(12).required("Password must be required"),
    // image: yup.mixed().required('A file is required'),
})

export const LoginValidation = yup.object({
    email: yup.string().required('E-mail is required'),
    password: yup.string().required('Password is Required'),
  });