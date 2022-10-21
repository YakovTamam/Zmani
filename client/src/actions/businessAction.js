import axios from "axios";
import {
  GET_BUSINESS_WORKING_DAYS_FAIL,
  GET_BUSINESS_WORKING_DAYS_REQUEST,
  GET_BUSINESS_WORKING_DAYS_SUCCESS,
} from "../constants/businessConstant";

export const getBusinessWorkingDays = id => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_BUSINESS_WORKING_DAYS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    console.log(userInfo);

    const { data } = await axios.get(`/api/users/${id}/business`, config);

    dispatch({ type: GET_BUSINESS_WORKING_DAYS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_BUSINESS_WORKING_DAYS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
