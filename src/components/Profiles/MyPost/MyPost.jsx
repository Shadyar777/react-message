import React from "react";
import mypostClasses from "./MyPost.module.css";
import Post from "./post/Post";
// import { addPostActiveCreact, updateNewPostTextActionCreat } from "../../../redux/profile-reducer";

// let addPostActiveCreact = (valueTextInput) => {
//   return { type: "ADD-POST" };
// };
// let updateNewPostTextActionCreat = (valueTextInput) => {
//   return { type: "UPDATE-NEW-TEST", newText: valueTextInput };
// };

const MyPost = (props) => {
  let textValue = React.createRef();
  let arrPost = props.statePost.map((el, index) => {
    return <Post key={index} massege={el.message} likeCount={el.likeCount} />;
  });

  function funcClick() {
    props.addPost();
    // let valueTextInput = textValue.current.value;
    // props.dispatch(addPostActiveCreact(valueTextInput));
    // props.dispatch({ type: "ADD-POST", valueTextInput: valueTextInput });
  }

  function changeClick(event) {
    let valueTextInput = textValue.current.value;
    props.updateNewPostText(valueTextInput);

    // let action = { type: "UPDATE-NEW-TEST", newText: valueTextInput };
    // let action = updateNewPostTextActionCreat(valueTextInput);
    // props.dispatch(action);
  }
  function myKeyFunc(event) {
    if (event.keyCode === 13) {
      funcClick();
    }
  }

  return (
    <div className={mypostClasses.mypost}>
      <h3>My post</h3>
      <div>
        <textarea ref={textValue} onChange={changeClick} onKeyDown={myKeyFunc} value={props.textPost} name='' id='' cols='30' rows='5'></textarea>
      </div>
      <input type='button' value='click My' onClick={funcClick} />
      <div>
        <div className={mypostClasses.item}>{arrPost.reverse()}</div>
      </div>
    </div>
  );
};

export default MyPost;
