import React from "react";
import classeDiologs from "./DiologsMessages.module.css";

const DiologsMessages = (props) => {
  return (
    <div className={classeDiologs.DiologsMessages}>
      <div className='list'>{props.masseges}</div>
    </div>
  );
};

export default DiologsMessages;
