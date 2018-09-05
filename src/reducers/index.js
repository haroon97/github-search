// Reducers

const initialState = {
  userData: {},
  isFetching: false,
  isError: false,
  isRecieved: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER': 
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        userData: {},
        isRecieved: false
      })
    case 'FETCHED_USER':
      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        userData: action.data,
        isRecieved: true
      })
    case 'RECIEVE_ERROR':
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        userData: {},
        isRecieved: false
      })
    default:
      return state;
  }
};

export default asyncReducer;