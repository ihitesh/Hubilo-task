import axios from "axios";
let baseUrl = "https://jsonplaceholder.typicode.com";

const constructUrl = (url) => {
  if (baseUrl) {
    return `${baseUrl}${url}`;
  }

  return url;
};

export const get = (url) => {
  try {
    return axios.get(constructUrl(url));
  } catch (e) {
    throw e;
  }
};

export const post = (url, postData) => {
  try {
    return axios.post(constructUrl(url), postData);
  } catch (e) {
    throw e;
  }
};
