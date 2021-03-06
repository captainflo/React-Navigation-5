import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
  didTryAutologin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        didTryAutologin: true,
      };
    case SET_DID_TRY_AL:
      return { ...state, didTryAutologin: true };
    case LOGOUT:
      return { ...initialState, didTryAutologin: true };
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    default:
      return state;
  }
};
