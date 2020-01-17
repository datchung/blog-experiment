import * as types from "../Actions/ActionTypes";
import initialState from "./InitialState";

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
}
