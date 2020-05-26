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
  createPost(_, data) {
    return http.post('/send-post', data);
  },
  fetchAllPost({ commit }) {
    return http
      .get('/get-post')
      .then(res => {
        console.log(res);
        commit('fetchAllPost', res.data);
      })
      .catch(e => {
        console.log(e);
      });
  },
  fetchPostDetail(_, id) {
    return http.get(`/post-detail/${id}`);
  }
};
