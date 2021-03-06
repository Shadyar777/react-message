import {connect} from "react-redux";
import {addPostActiveCreact, updateNewPostTextActionCreat} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const mapStateToProps = (state) => {
  return {
    statePost: state.profile.postData,
    textPost: state.profile.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreat(text));
    },
    addPost: () => {
      dispatch(addPostActiveCreact());
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;