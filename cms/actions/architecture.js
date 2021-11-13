import * as actions from './actionTypes';
import * as api from '../api';

export const getArchProjects = () => async dispatch => {
  try {
    const { data } = await api.getArchProjects();

    dispatch({ type: actions.GET_ARCH_PROJECTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createArchProject = formData => async dispatch => {
  try {
    const { data } = await api.createArchProject(formData);

    dispatch({ type: actions.CREATE_ARCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getArchProject = id => async dispatch => {
  try {
    const { data } = await api.getArchProject(id);

    dispatch({ type: actions.GET_ARCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const patchArchProject = formData => async dispatch => {
  try {
    const { data } = await api.patchArchProject(formData, formData._id);

    dispatch({ type: actions.UPDATE_ARCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteArchProject = id => async dispatch => {
  try {
    const { data } = await api.deleteArchProject(id);

    dispatch({ type: actions.DELETE_ARCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
