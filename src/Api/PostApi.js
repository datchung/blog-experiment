import { handleResponse, handleError } from "./ApiUtils";
const baseUrl = process.env.API_URL + "/data/posts.json";
//const baseUrl = "/data/posts.json";

export function getPosts() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}