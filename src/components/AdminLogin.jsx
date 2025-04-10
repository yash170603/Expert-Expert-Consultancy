 

import React, { useEffect } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { AtSign, Lock, LogIn } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      toast.loading("Logging in...", { id: "login" })
      
      const response = await axios.post(
        "http://localhost:3001/api/admin-auth/login",
        data, // not { data }, just data
        { withCredentials: true }
      )

      // Check for success (customize depending on backend response structure)
      console.log("this is the response of admin login", response)
      if (response.status === 200) {
        toast.success("Login successful! Just a second redirecting you to Dashboard", { id: "login" })
         setTimeout(()=>{
          window.location.href = "/admin-page";},2000)
      } 
    } catch (error) {
      console.error("Login error at admin side:", error)
      toast.error(
        error.response?.data?.message || "An error occurred during login",
        { id: "login" }
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-800 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex overflow-hidden h-[450px]">
        {/* Left Side */}
        <div className="hidden md:block w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 to-blue-800/90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white text-center px-6">
              Expert Educational Consultancy
            </h1>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center bg-gray-50">
          <div className="w-full max-w-sm mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Admin Login</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="email"
                    type="email"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="password"
                    type="password"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                </div>
                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-sm font-medium bg-blue-950 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center"
              >
                <LogIn className="mr-2" size={20} />
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
