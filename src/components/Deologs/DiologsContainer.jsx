// import React from "react";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/diologs-reducer";
import Diologs from "./Diologs";

let mapStateToProps = (state) => {
  return {
    diologPage: state.diologPage,
    newMessageBody: state.diologPage.newMessageBody,
    isAuth : state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    NewMessageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    SendMessageClick: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DiologsContainer = connect(mapStateToProps, mapDispatchToProps)(Diologs);

export default DiologsContainer;
