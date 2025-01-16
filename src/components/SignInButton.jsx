import React from 'react'
import { useNavigate } from 'react-router-dom'
const SignInButton = () => {
    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/sign-up');
      };
  return (
    <div>
        <button
            className="bg-gray-600 text-black px-4 py-2 rounded hover:bg-slate-200 transition-colors"
            onClick={handleSignIn}
          >
          </button>
    </div>
  )
}

export default SignInButton