import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";

const Head = () => {

  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        const { uid, email, displayName, photoURL } = user;

        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    // unsubscribe when component is unmount
    return () => unsubscribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute w-full bg-gradient-to-b from-black px-8 py-6 flex justify-between items-center z-10'>
      <img
        className='w-44'
        src={LOGO}
        alt='logo'
      />
      {user && <div className='flex gap-5 justify-center items-center'>
        <img
          className='w-10 h-10 rounded-lg'
          src={user?.photoURL}
          alt='userLogo'
        />
        <button
          className='text-white font-bold text-lg hover:underline'
          onClick={handleSignOut}
        >Sign Out
        </button>
      </div>}
    </div>
  )
}

export default Head