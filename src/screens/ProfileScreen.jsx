import React from "react";
import "./profileScreen.css";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <div>
            <img
              src="https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"
              alt="Profile"
            />
          </div>
          <div className="profileScreen-details">
            <h2>{user.email}</h2>

            <div className="profileScreen-plans">
              {/* <h3>Plans</h3> */}
              <button
                onClick={() => {
                  navigate("/");
                  auth.signOut();
                }}
                className="signout"
              >
                Sing out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
