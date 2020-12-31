const ADD_POST = "ADD-POST",
  UPDATE_NEW_TEST = "UPDATE-NEW-TEST";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  // if (action.type === ADD_POST) {
  //     let newPost = {
  //         id: 5,
  //         message: state.newPostText,
  //         likeCount: 5,
  //     };
  //     state.postData.push(newPost);
  //     state.newPostText = "";
  // } else if (action.type === UPDATE_NEW_TEST) {
  //     state.newPostText = action.newText;
  // }
  // return state;

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 5,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_TEST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActiveCreact = (valueTextInput) => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreat = (valueTextInput) => ({
  type: UPDATE_NEW_TEST,
  newText: valueTextInput,
});

export default profileReducer;