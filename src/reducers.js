import { combineReducers } from "redux";
/**
 * file imports
 */
import m1reducer from "./module1/reducer";
import m2reducer from "./module2/reducer";

function todoReducer(state = { Hello: "world" }, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
}

const todoApp = combineReducers({
  todoReducer,
  m1reducer,
  m2reducer,
});

export default todoApp;
