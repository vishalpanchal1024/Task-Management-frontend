import React from 'react';
import { FaCheckCircle, FaListUl, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import { RiSparklingFill } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import { IoFlashSharp } from 'react-icons/io5';
import { Input } from '@/utils/Components.lazy';
import { RegisterValidation } from '@/validations/auth.validation';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

function Register() {
  const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: { fullname: '', username: '', email: '', password: '', role: 'user' },
    validationSchema: RegisterValidation,
    onSubmit: async (value) => {
      console.log(value);
      try {
        // const data = await signUp(value).unwrap();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-3xl"></div>

          {/* Main content */}
          <div className="relative">
            {/* Main circle */}
            <div className=" w-80 h-80 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center animate-float shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-inner">
                <RiSparklingFill className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Floating icons */}
            <div
              className="absolute -bottom-4 right-0 animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-4 rounded-full shadow-lg">
                <FaCheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="absolute -top-4 right-0 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-full shadow-lg">
                <AiFillStar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div
              className="absolute bottom-10 -left-4 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-4 rounded-full shadow-lg">
                <IoFlashSharp className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-yellow-200/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-200/20 rounded-full blur-xl"></div>
          </div>

          {/* Welcome text */}
          <div className="mt-12 text-center relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Tasky</h2>
            <p className="text-gray-600">Your personal task management solution</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className=" p-8 rounded-2xl shadow-lg backdrop-blur-sm bg-white/80">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                <span className="font-bold text-white">AZ</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-br from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Tasky
              </h1>
            </div>
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              id="fullname"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Full name"
               
            />
            {touched.fullname && errors.fullname && <p className='text-red-500 text-sm '>{errors.fullname}</p>}

            <Input
              label="Username"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Username"
               
            />
            {touched.username && errors.username && <p className='text-red-500 text-sm '>{errors.username}</p>}

            <Input
              type="email"
              label="Email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Email Address"
               
            />
            {touched.email && errors.email && <p className='text-red-500 text-sm '>{errors.email}</p>}

            <Input
              type="password"
              label="Password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Password"
               
            />
            {touched.password && errors.password && <p className='text-red-500 text-sm '>{errors.password}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 animate-button-pulse shadow-md hover:shadow-lg"
            >
              Register
              <FaArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-600 hover:text-yellow-700 font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
