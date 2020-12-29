import React from "react";
import postClasses from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={postClasses.item}>
        <img src="https://s0.tchkcdn.com/i/1/1/80937_1802c6cf_1260804286_avatar_1940.jpg" alt="" />
        {/* <img src="./../../../../../public/ava.jpg" alt="" /> */}

        <div>{props.massege}</div>
        <div>{props.likeCount}</div>
      </div>
    </div>
  );
};

export default Post;
