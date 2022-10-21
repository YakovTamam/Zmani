import {
  GET_BUSINESS_WORKING_DAYS_FAIL,
  GET_BUSINESS_WORKING_DAYS_REQUEST,
  GET_BUSINESS_WORKING_DAYS_SUCCESS,
} from "../constants/businessConstant";

export const businessReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS_WORKING_DAYS_REQUEST:
      return { loading: true };
    case GET_BUSINESS_WORKING_DAYS_SUCCESS:
      return { loading: false, workingDays: action.payload };
    case GET_BUSINESS_WORKING_DAYS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
