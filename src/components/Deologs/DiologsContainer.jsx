// import React from "react";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/diologs-reducer";
import Diologs from "./Diologs";

let mapStateToProps = (state) => {
  return {
    diologPage: state.diologPage,
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

// const DiologsContainer = (props) => {
//   let state = props.store.getState().diologPage;

//   let NewMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   let SendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };

//   return <Diologs NewMessageChange={NewMessageChange} SendMessageClick={SendMessageClick} diologPage={state} />;
// };
