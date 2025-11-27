import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";
import { toggleShowGPTSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants"; 
import { changeLanguage } from "../utils/configSlice";

const Head = () => {

  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
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

  const handleGptSearchClick = () => {
    dispatch(toggleShowGPTSearch());
  }

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='fixed w-full px-8 py-6 flex justify-between items-center z-50 bg-gradient-to-b from-black'>
      <img
        className='w-44'
        src={LOGO}
        alt='logo'
      />
      
      {user && <div className='flex gap-6 justify-center items-center'>
        {
          showGptSearch && (
            <select
              className="bg-zinc-700 text-white px-4 py-2 rounded-lg cursor-pointer font-semibold"
              onChange={handleLangChange}
            >
              {
                SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
              }
            </select>
          )
        }


        <button className="text-white font-semibold bg-purple-700 rounded-lg px-3 py-2 scale-100 hover:scale-105 transition"
        onClick={handleGptSearchClick}
        >{showGptSearch ? "Home" : "GPT Search"}</button>
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