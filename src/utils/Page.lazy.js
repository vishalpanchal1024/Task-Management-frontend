import { lazy } from "react";


export const Register = lazy(()=>import ("@/pages/Auth/Register"));
export const Login = lazy(()=>import ("@/pages/Auth/Login"));
export const ForgotPassword = lazy(()=>import ("@/pages/Auth/ForgotPassword"));



export const Home = lazy(()=>import ("@/pages/Home"));
export const Tasks = lazy(()=>import ("@/pages/Tasks"));
export const Calendar = lazy(()=>import ("@/pages/Calendar"));
export const Settings = lazy(()=>import ("@/pages/Settings"));
export const Users = lazy(()=>import ("@/pages/Users"));