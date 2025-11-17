import Head from './Head'
import { useState } from "react";

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Head />

      <form className="bg-black/70 absolute w-[380px] p-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-md space-y-6">

        <h1 className="font-bold text-3xl mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input
          className="w-full p-3 rounded bg-[#333] text-white placeholder-gray-300 
               focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          placeholder="Full Name"
        />}

        <input
          className="w-full p-3 rounded bg-[#333] text-white placeholder-gray-300 
               focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          placeholder="Email Address"
        />

        <input
          className="w-full p-3 rounded bg-[#333] text-white placeholder-gray-300 
               focus:outline-none focus:ring-1 focus:ring-white"
          type="password"
          placeholder="Password"
        />

        <button className="bg-red-600 hover:bg-red-700 py-3 w-full rounded font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 text-sm">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span className="text-white font-medium hover:underline cursor-pointer"
                onClick={toggleSignInForm}
          >
            {isSignInForm ? "sign up " : "Sign in "}now.
          </span>
        </p>

        <p className="text-gray-500 text-xs leading-5">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            Learn more.
          </span>
        </p>

      </form>


      <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/58622d3e-49bc-482d-8b16-bddc4b672e8e/web/IN-en-20251110-TRIFECTA-perspective_281b0878-5972-49a4-9956-3f0cb5eb039b_large.jpg'
        alt='background'
      />

    </div>
  )
}

export default Login