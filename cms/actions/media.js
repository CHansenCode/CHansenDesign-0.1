import {
  GET_MEDIA,
  CREATE_MEDIA,
  GET_MEDIA_POST,
  UPDATE_MEDIA,
  DELETE_MEDIA,
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
  let category = formData.category ? `${formData.category}/` : '';
  let project = formData.project ? `${formData.project}/` : '';
  let fullUrl = `${mediaServer}/${category}${project}${formData.filename}`;

  let postData = {
    title: formData.title,
    alt: formData.alt,
    description: formData.description,
    excerpt: formData.excerpt,

    scale: formData.scale,
    northRotation: formData.northRotation,

    category: formData.category,
    project: formData.project,
    stage: '',
    drawingType: '',
    tags: [],
    src: {
      filename: formData.filename,
    },

    // src: {
    //   url: fullUrl,
    //   filename: formData.filename,
    //   url_original: fullUrl,
    //   url_3200: `${mediaServer}/${category}${project}/3200`,
    //   url_1600: `${mediaServer}/${category}${project}/1600`,
    //   url_800: `${mediaServer}/${category}${project}/800`,
    //   url_400: `${mediaServer}/${category}${project}/400`,
    // },
  };

  try {
    const { data } = await api.createMedia(postData);

    console.log(postData);
  } catch (error) {
    console.log(error.message);
    console.log(postData);
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

export const updateMedia = (formData, id) => async dispatch => {
  try {
    const { data } = await api.patchMedia(formData, id);

    dispatch({ type: UPDATE_MEDIA, payload: data });
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
