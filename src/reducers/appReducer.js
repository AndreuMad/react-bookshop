import {
  MAKING_REQUEST
} from '../constants/actions';

const defaultAppState = {
  requestFinished: true
};

export const appReducer = (state = defaultAppState, action) => {
  switch(action.type) {
    case MAKING_REQUEST:
      return {
        ...state,
        requestFinished: action.requestFinished
      };

    default:
      return state;
  }
};
