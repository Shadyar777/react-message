import React from "react";
import { Redirect } from "react-router-dom";
import DiologsMessages from "./Deolog/Diolog";
import diologClasses from "./Diologs.module.css";
import DiologsItem from "./DiologsItem/DiologsItem";

const Diologs = (props) => {
  let state = props.diologPage;
  let diologArr = state.diologs.map((el, index) => {
    return <DiologsItem id={el.id} name={el.name} key={index} />;
  });
  let diologMassage = state.messages.map((el, index) => {
    return <DiologsMessages masseges={el.massege} key={index} />;
  });
  let MessageBody = props.newMessageBody;

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.NewMessageChange(body);
  };
  // debugger;
  let onSendMessageClick = () => {
    props.SendMessageClick();
  };

  if (!props.isAuth) return <Redirect to = "/login"/> 

  return (
    <div className={diologClasses.diologs}>
      <div className={diologClasses.diologsItem}>{diologArr}</div>
      <div className={diologClasses.messages}>
        {diologMassage}
        <div>
          <div>
            <textarea name='' id='' cols='20' rows='10' value={MessageBody} onChange={onNewMessageChange}></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diologs;
