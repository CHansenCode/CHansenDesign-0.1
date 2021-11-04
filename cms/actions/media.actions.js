import { GET_MEDIA, CREATE_MEDIA, GET_MEDIA_POST, UPDATE_MEDIA, DELETE_MEDIA } from "../actions/base.actionTypes";
import * as api from "../api";

export const getMedia = () => async (dispatch) => {
  try {
    const { data } = await api.getMedia();

    dispatch({ type: GET_MEDIA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMedia = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createMedia(formData);

    dispatch({ type: CREATE_MEDIA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getMediaPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.getMediaPost(id);

    dispatch({ type: GET_MEDIA_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMedia = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.patchMedia(formData, id);

    dispatch({ type: UPDATE_MEDIA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMedia = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteMedia(id);

    dispatch({ type: DELETE_MEDIA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
