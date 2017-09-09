export const NETWORK_ACTIVE = '[Network] Network is active';
export const NETWORK_INACTIVE = '[Network] Network is inactive';

const initialState = {
  inprocess: 0,
};

export default function networkReducer(state = initialState, action) {
  switch (action.type) {
    case NETWORK_ACTIVE: return { ...state, inprocess: state.inprocess + 1 || false };
    case NETWORK_INACTIVE: return { ...state, inprocess: state.inprocess - 1 || false };
    default: return state;
  }
}
