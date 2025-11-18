import Head from './Head'
import { useRef, useState } from "react";
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    email.current.value = null;
    password.current.value = null;
    setErrorMessage(null);

    setSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://imgs.search.brave.com/sO_XFDPZeTpy3tvZP0sGxpW88D3lLWXdmcPcEVDX-dQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jdXRlLWFuaW1l/LWJveS13YWxscGFw/ZXJfNzc2ODk0LTEx/MTA3OS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }))
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("Email already registered. Please Sign In.");
          } else {
            setErrorMessage("Something went wrong! Try again." + error.message);
          }
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage("User not Found! Try again");
        });
    }
  }

  return (
    <div>
      <Head/>

      <form className="bg-black/70 absolute w-[380px] p-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-md space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input
          className="w-full p-3 rounded bg-[#333] text-white placeholder-gray-300 
               focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          placeholder="Full Name"
          ref={name}
        />}

        <input
          ref={email}
          className="w-full p-3 rounded bg-[#333] text-white placeholder-gray-300 
               focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          placeholder="Email Address"
        />

        <input
          ref={password}
          className="w-full p-3 rounded bg-[#333] text-white placeholder-gray-300 
               focus:outline-none focus:ring-1 focus:ring-white"
          type="password"
          placeholder="Password"
        />

        <p className='text-red-600'>{errorMessage}</p>

        <button className="bg-red-600 hover:bg-red-700 py-3 w-full rounded font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 text-sm">
          {isSignInForm ? "New to Netflix? " : "Already registered?  "}
          <span className="text-white font-medium hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? " sign up " : " Sign in "}now.
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