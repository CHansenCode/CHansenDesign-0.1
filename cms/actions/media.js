import {
  GET_MEDIA,
  CREATE_MEDIA,
  GET_MEDIA_POST,
  UPDATE_MEDIA,
  DELETE_MEDIA,
  ERROR_HANDLER_MODAL,
} from './actionTypes';

import * as api from '@/api';
import { mediaServer } from '@/config';

export const getMedia = () => async dispatch => {
  try {
    const { data } = await api.getMedia();

    dispatch({ type: GET_MEDIA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMedia = formData => async dispatch => {
  let cat = formData.category ? `${formData.category}/` : '';
  let pro = formData.project ? `${formData.project}/` : '';

  let postData = {
    title: formData.title,
    alt: formData.alt,
    description: formData.description,

    category: formData.category,
    project: formData.project,

    drawingType: '',
    scale: formData.scale,
    northRotation: formData.northRotation,

    tags: formData.tags,
    programs: formData.programs,

    filename: formData.filename ? formData.filename : formData.title,
    url: `${mediaServer}/${cat}${pro}${formData.filename}`,
  };

  try {
    const { data } = await api.createMedia(postData);

    dispatch({ type: CREATE_MEDIA, payload: data });
  } catch (error) {
    dispatch({
      type: ERROR_HANDLER_MODAL,
      payload: 'Failed to create new Media Post',
    });
  }
};
export const updateMedia = formData => async dispatch => {
  try {
    const { data } = await api.patchMedia(formData, formData._id);

    dispatch({ type: UPDATE_MEDIA, payload: data });
  } catch (error) {
    console.log(error.message);

    dispatch({ type: ERROR_HANDLER_MODAL, payload: 'Sending update failed' });
  }
};

export const getMediaPost = id => async dispatch => {
  try {
    const { data } = await api.getMediaPost(id);

    dispatch({ type: GET_MEDIA_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMedia = id => async dispatch => {
  try {
    const { data } = await api.deleteMedia(id);

    dispatch({ type: DELETE_MEDIA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
