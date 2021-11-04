import axios from "axios";

import { GET_MY_INTERCOMS, POST_TO_INTERCOM, DELETE_INTERCOM_POST } from "./actionTypes";

import * as api from "../api";

export const getIntercoms = () => async (dispatch) => {
  try {
    const { data } = await api.getConversations();

    dispatch({ type: GET_MY_INTERCOMS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const postComment = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.conversate(formData, id);

    dispatch({ type: POST_TO_INTERCOM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteSpeech(id);

    dispatch({ type: DELETE_INTERCOM_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
