import React from "react";
// import MyPost from "./MyPost/MyPost";
import MyPostContainer from "./MyPost/MyPostContainer";
import prifuleClasses from "./Profileclass.module.css";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = () => {
  return (
    <div className={prifuleClasses.content}>
      <ProfileInfo />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
