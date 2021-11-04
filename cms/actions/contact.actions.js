import { GET_CONTACT_FORM_POSTS, POST_CONTACT_FORM_POST, DELETE_CONTACT_FORM_POST } from "./actionTypes";

import * as api from "../api";

export const getContacts = () => async (dispatch) => {
  try {
    const { data } = await api.getContacts();

    dispatch({ type: GET_CONTACT_FORM_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const postMessage = (formData) => async (dispatch) => {
  try {
    const { data } = await api.postMessage(formData);

    dispatch({ type: POST_CONTACT_FORM_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMessage = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteMessage(id);

    dispatch({ type: DELETE_CONTACT_FORM_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
