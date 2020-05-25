import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  // fetchAllPost({ commit }, formData) {
  //   commit('fetchAllPost', formData);
  // },
  createPost(_, data) {
    return http.post('/send-post', data);
  }
};
