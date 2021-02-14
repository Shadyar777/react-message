const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
  TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING",
  FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
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
              followed: true
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
                followed: false
              }
            }
            return u;
          })
        }
        case SET_USERS:
          return {
            ...state,
            users: action.users,
              // users: [...state.users, ...action.users] перезатираю юзиров
          }
          case SET_CURRENT_PAGE:
            return {
              ...state,
              currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
              return {
                ...state,
                totalUsersCount: action.count / 334,
              }
              case TOOGLE_IS_FETCHING:
                return {
                  ...state,
                  isFetching: action.isTrueAndFalse

                }
              case FOLLOWING_IN_PROGRESS:
                return {
                  ...state,
                  followingInProgress: action.isFaching 
                  ? 
                  [...state.followingInProgress, action.userId]
                  :
                  state.followingInProgress.filter(id => id !== action.userId)

                }

                default:
                  return state;
  }
}

export const setIsFetching = (isTrueAndFalse) => ({
  type: TOOGLE_IS_FETCHING,
  isTrueAndFalse,
});
export const follow = (userId) => ({
  type: FOLLOW,
  userId
});
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalusersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
})
export const toogleFolowing = (isFaching, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  isFaching,
  userId
});
// export const setIsFetchingAC = (isTrueAndFalse) => ({
//   type: TOOGLE_IS_FETCHING,
//   isTrueAndFalse,
// });

export default userReducer;