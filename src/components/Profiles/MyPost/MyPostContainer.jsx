// import React, {isValidElement} from "react";
import {connect} from "react-redux";
import {addPostActiveCreact, updateNewPostTextActionCreat} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const mapStateToProps = (state) => {
  return {
    statePost: state.profile.postData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreat()),
    addPost: () => dispatch(addPostActiveCreact()),
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;

//  const MyPostContainer = (props) => {
//   let state = props.store.getState();
//   function funcClick() {
//     props.store.dispatch(addPostActiveCreact());
//   }

//   function changeClick(text) {
//     let action = updateNewPostTextActionCreat(text);
//     props.store.dispatch(action);
//   }

//   return <MyPost updateNewPostText={changeClick} addPost={funcClick} statePost={state.profile.postData} />;
// };
