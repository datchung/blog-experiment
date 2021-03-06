import * as types from "./ActionTypes";
import { beginApiCall, apiCallError } from "./ApiStatusActions";
import * as postApi from "../../Api/PostApi";

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadPosts() {
    return function(dispatch) {
      dispatch(beginApiCall());
  
      var promise = new Promise(function(resolve, reject) {
        try {
          resolve(postApi.getPosts());
        }
        catch(error) {
          reject(error);
        }
      });
      return promise
        .then(response => {
          dispatch(loadPostsSuccess(response.posts));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    };
  }