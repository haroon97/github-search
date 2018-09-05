import store from '../store/configureStore';

export const fetchPost = () => {
  return {
    type: 'FETCH_USER'
  };
};

export const recievePost = () => {
  return {
    type: 'FETCHED_USER'
  };
};

export const recieveError = () => {
  return {
    type: 'RECIEVE_ERROR'
  };
};

