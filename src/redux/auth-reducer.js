import { authAPI } from "../api/api";

const SET_USER_DATE = 'SET_USER_DATE';
// UNFOLLOW = "UNFOLLOW";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATE:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserDate = (id, email, login) => ({
  type: SET_USER_DATE,
  data: {
    id,
    email,
    login,
  },
});

export const authIn = () => {
   return (dispatch) => {
      authAPI.me().then((data) => {
         if (data.resultCode === 0) { // здесь date это axios структура 
           let {id, login, email } = data.data;
           dispatch(setAuthUserDate(id, email, login)) // а здесь date.date axios и серверный запрос
         }
       });
   }
}

export default authReducer;
