import {
  GET_BUSINESS_WORKING_DAYS_FAIL,
  GET_BUSINESS_WORKING_DAYS_REQUEST,
  GET_BUSINESS_WORKING_DAYS_RESET,
  GET_BUSINESS_WORKING_DAYS_SUCCESS,
  UPDATE_BUSINESS_BACKGROUND_SUCCESS,
  UPDATE_BUSINESS_LOGO_SUCCESS,
  UPDATE_BUSINESS_NAME_FAIL,
  UPDATE_BUSINESS_NAME_REQUEST,
  UPDATE_BUSINESS_NAME_SUCCESS,
  UPDATE_BUSINESS_SLOGAN_FAIL,
  UPDATE_BUSINESS_SLOGAN_REQUEST,
  UPDATE_BUSINESS_SLOGAN_SUCCESS,
  UPDATE_BUSINESS_WORKING_DAYS_FAIL,
  UPDATE_BUSINESS_WORKING_DAYS_REQUEST,
  UPDATE_BUSINESS_WORKING_DAYS_SUCCESS,
} from "../constants/businessConstant";

export const businessReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS_WORKING_DAYS_REQUEST:
      return { loading: true };
    case GET_BUSINESS_WORKING_DAYS_SUCCESS:
      return {
        loading: false,
        workingDays: action.payload.workingDays,
        businessName: action.payload.businessName,
        slogan: action.payload.slogan,
        logoImage: action.payload.logoImage,
        backgroundImage: action.payload.backgroundImage,
      };
    case UPDATE_BUSINESS_WORKING_DAYS_SUCCESS:
      return { loading: false, success: true, workingDays: action.payload };
    case UPDATE_BUSINESS_LOGO_SUCCESS:
      return { ...state, logoImage: action.payload };
    case UPDATE_BUSINESS_BACKGROUND_SUCCESS:
      return { ...state, backgroundImage: action.payload };
    case UPDATE_BUSINESS_NAME_REQUEST:
      return { ...state, loading: true };
    case UPDATE_BUSINESS_NAME_SUCCESS:
      return { ...state, loading: false, businessName: action.payload };
    case UPDATE_BUSINESS_NAME_FAIL:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_BUSINESS_SLOGAN_REQUEST:
      return { ...state, loading: true };
    case UPDATE_BUSINESS_SLOGAN_SUCCESS:
      return { ...state, slogan: action.payload };
    case UPDATE_BUSINESS_SLOGAN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case GET_BUSINESS_WORKING_DAYS_FAIL:
      return { loading: false, error: action.payload };
    case GET_BUSINESS_WORKING_DAYS_RESET:
      return {};
    default:
      return state;
  }
};

export const workingDaysReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_WORKING_DAYS_REQUEST:
      return { loading: true };
    case UPDATE_BUSINESS_WORKING_DAYS_SUCCESS:
      return {
        loading: false,
        success: true,
        workingDays: action.payload.workingDays,
        businessName: action.payload.businessName,
      };
    case UPDATE_BUSINESS_WORKING_DAYS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
