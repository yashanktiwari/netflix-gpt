import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // To put the data in the store or remove it according to the authentication of the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-50 flex flex-col md:flex-row justify-between">
      <img className="mx-auto w-44 md:mx-0" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          {
            gpt.showGptSearch && (
              <select className="py-1 md:py-2 px-2 md:px-4 bg-gray-800 text-white" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )
          }
          <div className="flex items-center justify-between w-full md:w-fit">
          <button
            className="py-1 md:py-2 px-2 md:px-4 m-2 bg-purple-700 text-white rounded-sm"
            onClick={handleGptSearchClick}
          >
            {gpt.showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <div className="flex items-center">
          <img
            src={USER_AVATAR}
            alt="usericon"
            className="w-8 h-8 md:w-10 md:h-10 rounded-sm"
          />
          <button
            className="ml-1 text-sm md:text-md md:p-2 text-white font-semibold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
