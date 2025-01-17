import React from 'react'
import { useNavigate } from 'react-router-dom'
const SignInButton = () => {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/sign-up');
      };
  return (
    <div>
        <button
            className="bg-white text-black p-1 rounded hover:bg-slate-200 transition-colors"
            onClick={handleSignIn}
          >
            Sign in!
          </button>
    </div>
  )
}

export default SignInButton