// import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";
import axios from "axios";


export const singlePageLoader = async ({ request, params }) => {
  const res = await axios("http://localhost:8000/api/posts/" + params.id);
  return res.data;
};
// export const listPageLoader = async ({ request, params }) => {
//   const query = request.url.split("?")[1];
//   const postPromise = apiRequest("/posts?" + query);
//   return defer({
//     postResponse: postPromise,
//   });
// };

// export const profilePageLoader = async () => {
//   const postPromise = apiRequest("/users/profilePosts");
//   const chatPromise = apiRequest("/chats");
//   return defer({
//     postResponse: postPromise,
//     chatResponse: chatPromise,
//   });
// };