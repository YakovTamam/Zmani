import axios from "axios";
import {
  GET_BUSINESS_WORKING_DAYS_FAIL,
  GET_BUSINESS_WORKING_DAYS_REQUEST,
  GET_BUSINESS_WORKING_DAYS_SUCCESS,
  UPDATE_BUSINESS_WORKING_DAYS_FAIL,
  UPDATE_BUSINESS_WORKING_DAYS_REQUEST,
  UPDATE_BUSINESS_WORKING_DAYS_SUCCESS,
} from "../constants/businessConstant";

export const getBusinessWorkingDays = () => async (dispatch, getState) => {
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

    const { data } = await axios.get(`/api/business/${userInfo._id}/`, config);

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

export const updateBusinessWorkingDays =
  workingDays => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_BUSINESS_WORKING_DAYS_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      console.log(workingDays);

      await axios.put(`/api/business/${userInfo._id}`, workingDays, config);

      dispatch({ type: UPDATE_BUSINESS_WORKING_DAYS_SUCCESS });
    } catch (error) {
      dispatch({
        type: UPDATE_BUSINESS_WORKING_DAYS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
