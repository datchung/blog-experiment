import { handleResponse, handleError } from "./ApiUtils";
const baseUrl = process.env.API_URL + "data/";

export function getPosts() {
  return fetch(baseUrl + "posts.json")
    .then(handleResponse)
    .catch(handleError);
}

export async function handlePostResponse(response) {
  console.info("response %o", response);
  return handleResponse(response, false).then(function(response) {
    console.info("text %o", response);
    return {
      content: response
    }
  });
}

export function getPost(link) {
  return fetch(baseUrl + link + ".md")
    .then(handlePostResponse)
    .catch(handleError);
}