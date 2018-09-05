import store from '../store/configureStore';

export const fetchPost = () => {
  return {
    type: 'FETCH_USER'
  };
};

export const recievePost = (data) => {
  return {
    type: 'FETCHED_USER',
    data
  };
};

export const recieveError = () => {
  return {
    type: 'RECIEVE_ERROR'
  };
};

export const thunkActionCreator = (username) => {
  const user = username.replace(/\s/g, "");
  store.dispatch(fetchPost());
  return function(dispatch, getState) {
    return fetch(`https://api.github.com/users/${user}`)
    .then((data) => data.json())
    .then((data) => {
      if (data.message === 'Not Found') {
        throw new Error('No such user found');
      }
      else {
        dispatch(recievePost(data));
      }
    })
    .catch((err) => dispatch(recieveError()));
  };
};

