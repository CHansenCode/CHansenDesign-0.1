import axios from "axios";

import {
  GET_TEXTS,
  CREATE_TEXT,
  GET_TEXT,
  UPDATE_TEXT,
  DELETE_TEXT,
  CREATE_NEW_PAGE,
  ADD_EMPTY_PARAGRAPH,
  DELETE_PARAGRAPH,
  UPDATE_PARAGRAPH,
} from "../actions/actionTypes";

import * as api from "../api";

export const getTexts = () => async (dispatch) => {
  try {
    const { data } = await api.getTexts();

    dispatch({ type: GET_TEXTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getText = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${api}/${id}`);

    dispatch({ type: GET_TEXT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createText = (post) => async (dispatch) => {
  try {
    const { data } = await axios.post(api, post);

    dispatch({ type: CREATE_TEXT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const patchText = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${api}/${formData._id}`, formData);

    dispatch({ type: UPDATE_TEXT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteText = () => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${api}/${id}`);

    dispatch({ type: DELETE_TEXT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createNewPage = (pageTitle) => async (dispatch) => {
  try {
    const { data } = await api.createNewPage(pageTitle);

    dispatch({ type: CREATE_NEW_PAGE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const addEmptyParagraph = (pageId) => async (dispatch) => {
  try {
    const { data } = await api.addEmptyParagraph(pageId);

    dispatch({ type: ADD_EMPTY_PARAGRAPH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteParagraph = (pageId, paraId) => async (dispatch) => {
  try {
    const { data } = await api.deleteParagraph(pageId, paraId);

    dispatch({ type: DELETE_PARAGRAPH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateParagraph = (pageId, paraId) => async (dispatch) => {
  try {
    const { data } = await api.updateParagraph(pageId, paraId);

    dispatch({ type: UPDATE_PARAGRAPH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
