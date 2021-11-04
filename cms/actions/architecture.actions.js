import {
  GET_ARCH_PROJECTS,
  CREATE_ARCH_PROJECT,
  GET_ARCH_PROJECT,
  UPDATE_ARCH_PROJECT,
  DELETE_ARCH_PROJECT,
} from "./actionTypes";

import * as api from "../api";

export const getArchProjects = () => async (dispatch) => {
  try {
    const { data } = await api.getArchProjects();

    dispatch({ type: GET_ARCH_PROJECTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createArchProject = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createArchProject(formData);

    dispatch({ type: CREATE_ARCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getArchProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.getArchProject(id);

    dispatch({ type: GET_ARCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const patchArchProject = (formData) => async (dispatch) => {
  try {
    const { data } = await api.patchArchProject(formData, formData._id);

    dispatch({ type: UPDATE_ARCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteArchProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteArchProject(id);

    dispatch({ type: DELETE_ARCH_PROJECT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
