import React from 'react';
import MyPostContainer from './MyPost/MyPostContainer';
import piffleClasses from './Profileclass.module.css';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {
   
  return (
    <div className={piffleClasses.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
