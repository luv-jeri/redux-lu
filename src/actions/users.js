import axios from 'axios';

const FETCH_USERS = 'FETCH_USERS';
const SET_USER = 'SET_USER';

const fetchAwait = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return { type: FETCH_USERS, payload: res.data };
};

const fetchMiddleware = () => {
  return async (dispatch) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({ type: SET_USER, payload: res.data });
  };
};

const toExports = {
  fetchAwait,
  fetchMiddleware,
};

export default toExports;
