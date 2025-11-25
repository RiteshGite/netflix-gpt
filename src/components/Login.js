import Head from './Head'
import { useRef, useState } from "react";
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMG, USER_AVATAR } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
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
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }))
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
        })
        .catch((error) => {
          setErrorMessage("User not Found! Try again");
        });
    }
  }

  return (
    <div>
      <Head />

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
        src={BACKGROUND_IMG}
        className='w-screen h-screen'
        alt='background'
      />

    </div>
  )
}

export default Login