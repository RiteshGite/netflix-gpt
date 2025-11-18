import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Head = () => {
  
  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute w-full bg-gradient-to-b from-black px-8 py-6 flex justify-between items-center'>
        <img
            className='w-44'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158'
            alt='logo'
        />
        {user && <div className='flex gap-5 justify-center items-center'>
          <img
          className='w-10 h-10 rounded-lg'
          src={user?.photoURL}
          alt='userLogo'
          />
         <button 
          className='text-gray-800 font-bold text-lg hover:underline'
          onClick={handleSignOut}
          >Sign Out
         </button>
        </div>}
    </div>
  )
}

export default Head