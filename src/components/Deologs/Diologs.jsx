import React from "react";
import DiologsMessages from "./Deolog/Diolog";
import diologClasses from "./Diologs.module.css";
import DiologsItem from "./DiologsItem/DiologsItem";

const Diologs = (props) => {
  debugger;
  let state = props.diologPage;
  let diologArr = state.diologs.map((el, index) => {
    return <DiologsItem id={el.id} name={el.name} key={index} />;
  });
  let diologMassage = state.messages.map((el, index) => {
    return <DiologsMessages message={el.massege} key={index} />;
  });

  let MessageBody = props.newMessageBody;

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.NewMessageChange(body);
  };
  let onSendMessageClick = () => {
    props.SendMessageClick();
  };

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
