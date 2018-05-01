import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=JPR1234';

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return { type: FETCH_POSTS, payload: request };
};
