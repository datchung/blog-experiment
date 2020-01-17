import { handleResponse, handleError } from "./ApiUtils";
const baseUrl = process.env.API_URL + "/src/Data/posts.json";

export function getPosts() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}