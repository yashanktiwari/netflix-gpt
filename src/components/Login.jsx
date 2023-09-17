import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    let message;
    if (isSignInForm) {
      message = checkValidData(email.current.value, password.current.value);
    } else {
      message = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }
    setErrorMessage(message);

    if (message) return;

    // Sign Up / Sign In
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg-image"
          aria-hidden="true"
          data-uia="nmhp-card-hero+background+image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          className="default-ltr-cache-ve3cf8 eae08lb0"
        />
      </div>
      <div className="absolute mx-[calc((100%-24rem)/2)] my-40 bg-black bg-opacity-[0.85] rounded-lg">
        <h1 className="text-white pt-6 mx-9 text-3xl font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          className="flex flex-col relative px-8 py-4 mx-auto w-96"
          onSubmit={(e) => e.preventDefault()}
        >
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-4 bg-gray-700 rounded-lg"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 my-4 bg-gray-700 rounded-lg"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-4 bg-gray-700 rounded-lg"
            ref={password}
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="bg-red-700 p-3 my-6 text-white rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {isSignInForm ? (
          <p className="px-8 pb-8 text-gray-400">
            New to Netflix?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="px-8 pb-8 text-gray-400">
            Already a user?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              Sign In Now
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
