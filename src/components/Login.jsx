import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          className="default-ltr-cache-ve3cf8 eae08lb0"
        />
      </div>
      <div className="absolute mx-[calc((100%-24rem)/2)] my-40 bg-black bg-opacity-[0.85] rounded-lg">
        <h1 className="text-white pt-6 mx-9 text-3xl font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="flex flex-col relative px-8 py-4 mx-auto w-96">
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-4 bg-gray-700 rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 my-4 bg-gray-700 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-4 bg-gray-700 rounded-lg"
          />
          <button className="bg-red-700 p-3 my-6 text-white rounded-lg">
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
