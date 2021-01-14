const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS";

let initialState = {
  // newPostText: "this value textarea",
  users: [{
      id: 1,
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1O1bWk0Z-x33nsVgIJCxTk5o8N5eeeNyNQ&usqp=CAU',
      followed: false,
      fullName: "Shady",
      status: "I am a bose",
      location: {
        city: "Almaty",
        country: "Kazahstan"
      }
    },
    {
      id: 2,
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1O1bWk0Z-x33nsVgIJCxTk5o8N5eeeNyNQ&usqp=CAU',
      followed: true,
      fullName: "Kenzhebek",
      status: "I am a bose",
      location: {
        city: "Almaty",
        country: "Kazahstan"
      }
    },
    {
      id: 3,
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1O1bWk0Z-x33nsVgIJCxTk5o8N5eeeNyNQ&usqp=CAU',
      followed: false,
      fullName: "Erasyl",
      status: "I am a bose",
      location: {
        city: "Almaty",
        country: "Kazahstan"
      }
    },

  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false
            }
          }
          return u;
        })
      }

      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {
                ...u,
                followed: true
              }
            }
            return u;
          })
        }
        case SET_USERS:
          return {
            ...state, users: [...state.users, ...action.users]
          }

          default:
            return state;
  }
}

export const followAC = (userId) => ({
  type: FOLLOW,
  userId
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
});

export default userReducer;