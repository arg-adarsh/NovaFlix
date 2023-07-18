import React, { useRef, useState } from "react";
import "./signIn.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignIn = ({ sign }) => {
  const [isSignIN, setIsSignIN] = useState(sign);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signIn = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="signInScreen">
      <form>
        <h1>{isSignIN ? "Sign In" : "Create new account"}</h1>
        {!isSignIN && (
          <input key="name" required placeholder="Name" type="text" />
        )}
        <input
          key="email"
          required
          ref={emailRef}
          placeholder="Email"
          type="email"
        />
        <input
          key="password"
          required
          ref={passwordRef}
          placeholder="Password"
          type="password"
        />

        {!isSignIN && (
          <input
            key="confirm"
            required
            placeholder="Confirm Password"
            type="password"
          />
        )}

        <button onClick={isSignIN ? signIn : register} type="submit">
          {isSignIN ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <h4>
        <span className="signup-gray">
          {isSignIN ? "New to Netflix? " : "Already have an account? "}
        </span>
        <span
          onClick={() => {
            setIsSignIN(!isSignIN);
          }}
          className="signup_link"
        >
          {isSignIN ? "Sign up now" : "Sign In"}
        </span>
      </h4>
    </div>
  );
};

export default SignIn;
