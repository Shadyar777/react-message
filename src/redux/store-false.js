import diologsReducer from "./diologs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profile: {
      newPostText: "this value textarea",
      postData: [{
          id: 1,
          message: "It's my first post",
          likeCount: 12,
        },
        {
          id: 2,
          message: "It's my first post",
          likeCount: 5,
        },
        {
          id: 3,
          message: "It's my first post",
          likeCount: 5,
        },
      ],
    },
    sidebarReducer: {},
    diologPage: {
      newMessageBody: "",
      diologs: [{
          id: 1,
          name: "Shady",
          massege: "Hi!",
        },
        {
          id: 2,
          name: "Kicha",
          massege: "Hello!",
        },
        {
          id: 3,
          name: "Saka",
          massege: "Fuck you!",
        },
        {
          id: 4,
          name: "Eldos",
          massege: "Hahahaha!",
        },
        {
          id: 5,
          name: "Erasyl",
          massege: "What are you do?",
        },
        {
          id: 6,
          name: "Shady",
          massege: "Sleep",
        },
      ],
      messages: [{
          id: 1,
          massege: "Hi!",
        },
        {
          id: 2,
          massege: "Hello!",
        },
        {
          id: 3,
          massege: "Fuck you!",
        },
        {
          id: 4,
          massege: "Hahahaha!",
        },
        {
          id: 5,
          massege: "What are you do?",
        },
        {
          id: 6,
          massege: "Sleep",
        },
      ],
    },
  },
  _callSubscriber(star) {
    console.log("State Chanhed" + star);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
    // this._callSubscriber(observer);

  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.diologPage = diologsReducer(this._state.diologPage, action);
    this._state.sidebarReducer = sidebarReducer(this._state.sidebarReducer, action);
    this._callSubscriber(this._state);
  },
};

// export const addPostActiveCreact = (valueTextInput) => ({ type: ADD_POST });
// export const updateNewPostTextActionCreat = (valueTextInput) => ({ type: UPDATE_NEW_TEST, newText: valueTextInput });
// export const sendMessageCreator = (valueTextInput) => ({ type: SEND_MESSAGE });
// export const updateNewMessageBodyCreator = (bodyValue) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: bodyValue });

window.store = store;
export default store;