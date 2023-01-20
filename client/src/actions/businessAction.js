import axios from "axios";
import {
  BUSINESS_LOGIN_REQUEST,
  BUSINESS_LOGIN_SUCCESS,
  BUSINESS_LOGIN_FAIL,
  BUSINESS_LOGOUT,
} from "../constants/businessConstant";

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: BUSINESS_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/business/emailauth",
      { email, password },
      config
    );

    dispatch({ type: BUSINESS_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BUSINESS_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
