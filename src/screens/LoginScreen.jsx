import React, { useState } from "react";
import "./loginScreen.css";
import SignIn from "./SignIn";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const [isSignIN, setIsSignIN] = useState(true);
  return (
    <div className="loginScreen">
      <div className="loginScreen-gradiant" />
      <div className="loginScreen-topbar">
        <img
          className="loginScreen-logo"
          src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
          alt="logo"
        />
        {!signIn && (
          <button
            onClick={() => {
              setSignIn(true);
            }}
            className="signIn-button"
          >
            {" "}
            Sign In
          </button>
        )}
      </div>

      {signIn ? (
        <SignIn sign={isSignIN} />
      ) : (
        <>
          <div className="loginscreen-body">
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen-input">
              <form action="">
                <input type="email" placeholder="Email address " />
                <button
                  onClick={() => {
                    setSignIn(true);
                    setIsSignIN(false);
                  }}
                >
                  Get Started &#10148;
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginScreen;
