/* selectors */

export const getPosts = ({ posts }) => posts;

/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_POST = createActionName('ADD_POST');

/* action creators */
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addPost = (payload) => ({ payload, type: ADD_POST });

/* thunk creators */
export const fetchPosts = () => {
  return (dispatch, getState) => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (rawResponse) {
          return rawResponse.json();
        })
        .then(function (parsedResponse) {
          dispatch(fetchSuccess(parsedResponse));
        });
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return action.payload;
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
      };
    }
    case ADD_POST: {
      statePart.push(action.payload);
      console.log('action', action.payload);
      return statePart;
    }
    default:
      return statePart;
  }
};
