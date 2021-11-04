import axios from "axios";

import { GET_POSTS, CREATE_POST, GET_POST, UPDATE_POST, DELETE_POST } from "../actions/actionTypes";

import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getTexts();

    dispatch({ type: GET_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createText = (post) => async (dispatch) => {
  try {
    const { data } = await axios.post(api, post);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getText = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${api}/${id}`);

    dispatch({ type: GET_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const patchText = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${api}/${formData._id}`, formData);

    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteText = () => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${api}/${id}`);

    dispatch({ type: DELETE_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
