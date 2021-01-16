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
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [...state.postData, {
            id: 5,
            message: state.newPostText,
            likeCount: 5,
          }],
          newPostText: "",
      }

      case UPDATE_NEW_TEST:
        return {
          ...state,
          newPostText: action.newText,
            postData: [...state.postData],
        }
        default:
          return state;
  }
}

export const addPostActiveCreact = (valueTextInput) => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreat = (valueTextInput) => ({
  type: UPDATE_NEW_TEST,
  newText: valueTextInput,
});

export default profileReducer;