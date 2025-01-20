import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/signInbackgroundimage.webp"; // Importing image

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form submission
    let valid = true;

    if (!email) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      alert("Sign-In successful!"); // Placeholder action
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
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailError ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
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
                passwordError ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
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
