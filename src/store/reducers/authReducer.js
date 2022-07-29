import * as types from "../types";

const initialState = {
  loginError: "",
  isLogging: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLogging: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLogging: false,
      };

    default:
      return state;
  }
};
