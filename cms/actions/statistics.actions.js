import { GET_STATISTICS } from "../actions/actionTypes";

import * as api from "../api";

export const getStatistics = () => async (dispatch) => {
  try {
    const { data } = await api.getStatistics();

    dispatch({ type: GET_STATISTICS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
