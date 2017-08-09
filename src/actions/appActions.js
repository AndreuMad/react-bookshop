import {
  MAKING_REQUEST
} from '../constants/actions';

export const requestStatus = (status) => {

  return {
    type: MAKING_REQUEST,
    requestFinished: status
  };
};
