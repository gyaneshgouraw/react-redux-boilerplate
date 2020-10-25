import { SET_VAL } from "./actionTypes";

const initstate = { module2: "value" };
function reducer(state = initstate, action) {
  switch (action.type) {
    case SET_VAL:
      return Object.assign({}, state, {
        module2: action.data,
      });
    default:
      return state;
  }
}

export default reducer;
