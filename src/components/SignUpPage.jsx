// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { Loader2, User, Mail, Phone, Lock } from 'lucide-react';
// import toast, { Toaster } from "react-hot-toast";
// import doctorSignup from "../assets/doctorSignup.png";

// const SignupForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       await axios.post('http://localhost:3000/api/signup', data);
//       toast.success('Signup successful!');
//       navigate('/Dashboard');
//     } catch (error) {
//       toast.error('An error occurred. Please try again later.');
//     }
//     setIsSubmitting(false);
//   };

//   return (
  
//       <div className="w-full max-w-md bg-white bg-opacity-80 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
//         <Toaster position="top-center" reverseOrder={false} />
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-6 flex space-x-4">
//             <div className="w-1/2">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
//                 First Name
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   {...register("firstName", { required: "First name is required" })}
//                   className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
//                   id="firstName"
//                   type="text"
//                   placeholder="John"
//                 />
//               </div>
//               {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
//             </div>
//             <div className="w-1/2">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
//                 Last Name
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   {...register("lastName", { required: "Last name is required" })}
//                   className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
//                   id="lastName"
//                   type="text"
//                   placeholder="Doe"
//                 />
//               </div>
//               {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
//             </div>
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 {...register("email", { 
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Invalid email address"
//                   }
//                 })}
//                 className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="john@example.com"
//               />
//             </div>
//             {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
//               Phone Number
//             </label>
//             <div className="relative">
//               <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 {...register("phoneNumber", { required: "Phone number is required" })}
//                 className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
//                 id="phoneNumber"
//                 type="tel"
//                 placeholder="(123) 456-7890"
//               />
//             </div>
//             {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber.message}</p>}
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 {...register("password", { 
//                   required: "Password is required",
//                   minLength: {
//                     value: 8,
//                     message: "Password must be at least 8 characters"
//                   }
//                 })}
//                 className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 placeholder="********"
//               />
//             </div>
//             {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
//           </div>
//           <div className="flex items-center justify-between">
//             {/* <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               type="submit"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <div className="flex justify-center items-center">
//                   <Loader2 className="animate-spin mr-2" size={18} />
//                   <span>Signing Up...</span>
//                 </div>
//               ) : (
//                 "Sign Up"
//               )}
//             </button> */}
//           </div>
//           {/* <div className="text-center mt-6">
//             <p className="text-gray-600">
//               Already have an account?{" "}
//               <Link to="/sign-in" className="text-blue-500 hover:text-blue-700 font-semibold">
//                 Sign In
//               </Link>
//             </p>
//           </div> */}
//         </form>
       
//       </div>
    
//   );
// };

// export default SignupForm;

// {/* <div   this was the bacground image of doctor 
// className="min-h-screen flex items-center justify-center p-6"
// style={{
//   backgroundImage: `url(${doctorSignup})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   opacity:0.9

// }}
// >
// </div> */}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Loader2, User, Mail, Phone, Lock } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:3000/api/signup', data);
      toast.success('Signup successful!');
      navigate('/Dashboard');
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white bg-opacity-80 shadow-2xl rounded-lg p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                {...register("firstName", { required: "First name is required" })}
                className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="John"
              />
            </div>
            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              {...register("phoneNumber", { required: "Phone number is required" })}
              className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="tel"
              placeholder="(123) 456-7890"
            />
          </div>
          {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })}
              className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
        </div>
        {/* <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin mr-2" size={18} />
              <span>Signing Up...</span>
            </div>
          ) : (
            "Sign Up"
          )}
        </button> */}
        {/* <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-500 hover:text-blue-700 font-semibold">
              Sign In
            </Link>
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default SignupForm;