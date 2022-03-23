/* selectors */

export const getComments = ({ comments }) => comments;

/* action name creator */
const reducerName = 'comments';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchComments = () => {
  return (dispatch, getState) => {
    try {
      fetch('https://jsonplaceholder.typicode.com/comments')
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
      return statePart;
    }
    default:
      return statePart;
  }
};
