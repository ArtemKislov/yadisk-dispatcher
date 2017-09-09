import axios from 'Services/axios';

export const GET_DIR_REQUEST = '[Directory] Get Directory Data Request';
export const GET_DIR_REQUEST_SUCCESS = '[Directory] Get Directory Data Success';

const cache = new Map();

const initialState = {
  items: [],
};

export default function diskReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case GET_DIR_REQUEST: {
      return state;
    }
    case GET_DIR_REQUEST_SUCCESS: {
      return { ...state, ...payload.data._embedded };
    }

    default: return state;
  }
}

export const asyncGetDirRequest = (path = '/') => {
  return (dispatch) => {
    // if (cache.has(path)) return dispatch({ type: GET_DIR_REQUEST_SUCCESS, payload: cache.get(path) });
    dispatch({ type: GET_DIR_REQUEST });
    axios().get(`/resources?path=${path}&preview_size=M`)
      .then((payload) => {
        cache.set(path, payload);
        dispatch({ type: GET_DIR_REQUEST_SUCCESS, payload });
      })
      .catch(error => console.log(error));
  }
}
