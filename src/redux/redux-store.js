import {combineReducers, createStore} from 'redux';
import diologsReducer from './diologs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebarReducer';
import userReducer from './users-reducer';

let reducers = combineReducers({
  profile: profileReducer,
  diologPage: diologsReducer,
  sidebarReducer: sidebarReducer,
  usersPage: userReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
