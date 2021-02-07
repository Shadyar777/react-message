import {
  combineReducers,
  createStore
} from 'redux';
import authReducer from './auth-reducer';
import diologsReducer from './diologs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebarReducer';
import userReducer from './users-reducer';

let reducers = combineReducers({
  profile: profileReducer,
  diologPage: diologsReducer,
  sidebarReducer: sidebarReducer,
  usersPage: userReducer,
  auth: authReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;