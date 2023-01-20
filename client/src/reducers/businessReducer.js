import {
  BUSINESS_LOGIN_REQUEST,
  BUSINESS_LOGIN_SUCCESS,
  BUSINESS_LOGIN_FAIL,
  BUSINESS_LOGOUT,
} from "../constants/businessConstant";

export const businessLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case BUSINESS_LOGIN_REQUEST:
      return { loading: true };
    case BUSINESS_LOGIN_SUCCESS:
      return {
        token: action.payload.token,
        info: action.payload,
        loading: false,
      };
    case BUSINESS_LOGIN_FAIL:
      return { error: action.payload, loading: false };
    case BUSINESS_LOGOUT:
      return { error: action.payload, loading: false };
    default:
      return {};
  }
};
