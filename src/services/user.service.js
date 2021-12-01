
// USER FRONTEND SERVICE

import Axios from 'axios';
var axios = Axios.create({ withCredentials: true });
// const axios = require('axios')
const USER_URL = 'http://localhost:3030/api/user/'
const AUTH_URL = 'http://localhost:3030/api/auth/'
const STORAGE_KEY = 'loggedinUser'

export const userService = {
  getLoggedinUsers,
  getLoggedinUser,
  login,
  logout,
  signup
}

async function getLoggedinUsers() {
  try {
    const res = await axios.get(USER_URL)
    return res.data
  } catch (err) {
    console.log('Error in getLoggedinUsers (Front User Service):', err);
    throw err;
  }
}

async function getLoggedinUser() {
  try {
    // const res = await axios.get(USER_URL + id)
    // return res.data
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
  } catch (err) {
    console.log('Error in getLoggedinUser (Front User Service):', err);
    throw err;
  }
}

async function login(username, password) {
  try {
    const res = await axios.post(AUTH_URL + '/login', { username, password })
    const user = res.data
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    console.log(`${user.username} just logged in`);
    return user
  } catch (err) {
    console.log('Error in Login (Front User Service):', err);
    throw err;
  }
}

async function signup(username, password, fullname) {
  try {
    const res = await axios.post(AUTH_URL + '/signup', { username, password, fullname })
    const user = res.data
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    console.log(`${user.username} just signed up`);
    return user
  } catch (err) {
    console.log('Error in Sign Up (Front User Service):', err);
    throw err;
  }
}

async function logout() {
  try {
    const res = await axios.post(AUTH_URL + '/logout')
    sessionStorage.removeItem(STORAGE_KEY)
    console.log(res.data.msg);
    return res.data;
  } catch (err) {
    console.log('Error in Logout (Front User Service):', err);
    throw err;
  }
}