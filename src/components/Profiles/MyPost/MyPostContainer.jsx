import React from "react";
import { addPostActiveCreact, updateNewPostTextActionCreat } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
  let state = props.store.getState();
  function funcClick() {
    props.store.dispatch(addPostActiveCreact());
  }

  function changeClick(text) {
    let action = updateNewPostTextActionCreat(text);
    props.store.dispatch(action);
  }

  return <MyPost updateNewPostText={changeClick} addPost={funcClick} statePost={state.profile.postData} />;
};

export default MyPostContainer;
