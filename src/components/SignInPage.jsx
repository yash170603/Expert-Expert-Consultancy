import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/signInbackgroundimage.webp";
import axios from "axios";
import { apiClient } from "../lib/axios.config";
import { useNavigate } from "react-router-dom";
const SignInPage = () => {



  const {register,handleSubmit,formState: { errors },} = useForm();
  const navigate = useNavigate();
          
  const onSubmit = async (data) => {
    // Placeholder action
    console.log("Data submitted while signining in ", data);
    try {
    
      //const response = await apiClient.post("/auth/login", data);
      const response = await axios.post("http://localhost:3001/api/auth/login",data,{withCredentials:true});
      if (response.status === 200) {
        alert("Sign-In successful!");
        console.log(response);
        navigate("/dashboard");
      }  
    } catch (error) {
             console.log("This is the error caught while login",error)
                if( error.status === 400){
                    alert("Login failed, Invalid Credentials")
                }
                else if(error.status === 500){ 
                    alert("Internal server error , pLease try again sometime later ")
                }
    }
    
  };

  

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative w-full max-w-xs bg-white bg-opacity-80 shadow-lg rounded-lg px-8 pt-6 pb-8 z-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                Please provide a valid email.
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="******************"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                Please provide a password.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link
            className="text-blue-500 hover:text-blue-800 font-bold"
            to="/sign-up"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
