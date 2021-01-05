import {combineReducers, createStore} from "redux";
import diologsReducer from "./diologs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  profile: profileReducer,
  diologPage: diologsReducer,
  sidebarReducer: sidebarReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
