import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/diologs-reducer";
import Diologs from "./Diologs";

const DiologsContainer = (props) => {
  let state = props.store.getState().diologPage;

  let NewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  let SendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  return <Diologs NewMessageChange={NewMessageChange} SendMessageClick={SendMessageClick} diologPage={state} />;
};

export default DiologsContainer;
