import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import toast,{Toaster} from "react-hot-toast";
import { Link } from "react-router-dom";


const SignupForm = () => {
   const[buttonClicked,setButtonClicked]=useState(false)  
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
   const navigate= useNavigate(); 

    
        const onSubmit = async  (data) => {
           
          setFormData(data);
            setButtonClicked(true)
            try {
          const apiResponse= await axios.post('http://localhost:3000/api/signup,',data);
            
          // console.log(apiResponse.data)
          
            navigate('/Dashboard')
        }
        catch (error) {
          //console.log(error)
          toast.error('An error occured, please try again later')
     }
     setButtonClicked(false)
       } 
       
  

  return (
    <div className="bg-gradient-to-br from-slate-600 via-blue-900 to-blue-950 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="container flex justify-center items-center h-3/4 w-full max-w-lg bg-slate-500 p-8 rounded-lg shadow-lg border-2 border-yellow-600">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center text-white mb-4">Sign Up!</h1>
          <p className="text-center text-gray-300 mb-6">Fill in the details to get started.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Toaster />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder="First Name *"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder="Last Name *"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email address *"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              type="tel"
              {...register("phoneNumber", { required: true })}
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password *"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              {buttonClicked ? (
                <div className="flex justify-center items-center">
                  <Loader2 className="animate-spin" />
                </div>
              ) : (
                <p className="text-white">Sign Up!</p>
              )}
            </button>
            <div className="flex justify-center items-center mt-4">
              <p className="text-gray-300">Already have an account? </p>
              <Link to={'/sign-in'} className="text-blue-400 hover:underline ml-2">Sign In!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
