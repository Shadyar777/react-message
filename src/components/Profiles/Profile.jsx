import React from "react";
// import MyPost from "./MyPost/MyPost";
import MyPostContainer from "./MyPost/MyPostContainer";
import prifuleClasses from "./Profileclass.module.css";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {
  return (
    <div className={prifuleClasses.content}>
      <ProfileInfo />
      <MyPostContainer statePost={props.statePost} dispatch={props.dispatch} textPost={props.textPost} store={props.store} />
      {/* <MyPostContainer statePost={props.statePost} dispatch={props.dispatch} textPost={props.textPost} store={props.store} /> */}
    </div>
  );
};

export default Profile;
