import {
  GET_MEDIA,
  CREATE_MEDIA,
  GET_MEDIA_POST,
  UPDATE_MEDIA,
  DELETE_MEDIA,
} from '../actions/base.actionTypes';
import * as api from '../api';
import { localUser } from '@/hooks';
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
  const filename = formData.title + '.jpg';
  const category = formData.category;
  const project = formData.project;

  category && category == category + '/';
  project && project == project + '/';

  const localToken = localStorage.getItem('jwt-token');

  const dataPost = {
    title: formData.title,
    description: formData.description,
    excerpt: '',
    scale: formData.scale,
    northRotation: formData.northRotation,

    alt: formData.alt,

    category: formData.category,
    drawingType: formData.drawingType,
    project: formData.project,
    stage: formData.stage,
    tags: formData.tags,
    programs: formData.tags,

    src: {
      full: `${mediaServer}/${category}${project}${filename}`,
      filename: filename,
      url_original: '',
      url_3200: '',
      url_1600: '',
      url_800: '',
      url_400: '',
    },
    createdBy: localUser(),
  };

  try {
    // const { data } = await api.createMedia(formData);
    console.log(dataPost);

    // dispatch({ type: CREATE_MEDIA, payload: data });
  } catch (error) {
    console.log(error.message);
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
