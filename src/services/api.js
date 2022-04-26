import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL = "https://back-repoprovas1.herokuapp.com";
// const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

async function signup(body) {
  return await axios.post(`${BASE_URL}/users`, body);
}

export async function login(body) {
  return await axios.post(`${BASE_URL}/login`, body);
}

function getUser(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/users`, config);
}

async function getTimeline(token) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/feed`, config);
}

function getCommentsById(token, postId) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/comments/${postId}`, config);
}

function updatePost(body, idPost) {
  return axios.put(`${BASE_URL}/feed/${idPost}`, body);
}

async function publishPost(body, token) {
  const config = createConfig(token);
  return await axios.post(`${BASE_URL}/feed`, body, config);
}

function deletePost(token, id) {
  const config = createConfig(token);
  return axios.delete(`${BASE_URL}/feed/${id}`, config);
}

function likePost(id, token) {
  const config = createConfig(token);
  return axios.patch(`${BASE_URL}/like/${id}`, null, config);
}

function unlikePost(id, token) {
  const config = createConfig(token);
  return axios.patch(`${BASE_URL}/unlike/${id}`, null, config);
}

function sendComment(body, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/comments`, body, config);
}
async function getTrendingsHashtags(token) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/hashtag`, config);
}

async function getTrending(hashtag, token) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/hashtag/${hashtag}`, config);
}

async function getUserPosts(id, token) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/user/${id}`, config);
}

async function searchUsers(body) {
  return await axios.get(`${BASE_URL}/searchusers`, body);
}

async function getAllUsers() {
  return await axios.get(`${BASE_URL}/allusers`);
}

async function getUserId(id, token) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/userid/${id}`, config);
}

async function getPostsAmount(token) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/postamount`, config);
}

async function checkIfFollows(userId, followerId) {
  return await axios.get(`${BASE_URL}/checkiffollows/${userId}/${followerId}`);
}

async function follow(userId, followerId) {
  return await axios.post(`${BASE_URL}/follow/${userId}/${followerId}`);
}

async function unfollow(userId, followerId) {
  return await axios.delete(`${BASE_URL}/unfollow/${userId}/${followerId}`);
}

async function getUserName(name) {
  return await axios.get(`${BASE_URL}/username/${name}`);
}