export const GET_DIR_CONTENT_REQUEST = '[Directory] Get Directory Content Request';
export const GET_DIR_CONTENT_REQUEST_SUCCESS = '[Directory] Get Directory Content Success';
export const GET_DIR_CONTENT_REQUEST_ERROR = '[Directory] Get Directory Content Error';

const initialState = {
  items: [],
};

export default function diskReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case GET_DIR_CONTENT_REQUEST: {
      return state;
    }
    case GET_DIR_CONTENT_REQUEST_SUCCESS: {
      return { ...state, ...payload.content._embedded };
    }

    default: return state;
  }
}

export const asyncGetDirRequest = (path = '/') => {
  return { type: GET_DIR_CONTENT_REQUEST, payload: { path } };
};
