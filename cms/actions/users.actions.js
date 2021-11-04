import axios from "axios";

import { GET_USERS, CREATE_USER, GET_USER, UPDATE_USER, DELETE_USER } from "../actions/actionTypes";

import * as api from "../api";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();

    dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTicket = (post) => async (dispatch) => {
  try {
    const { data } = await api.createTicket();

    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);

    dispatch({ type: GET_USER, payload: data });
  } catch (error) {}
};

export const patchUser = (formData, id) => async (dispatch) => {
  try {
    const { data } = await api.patchUser(formData, id);

    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.deleteUser(id);

    dispatch({ type: DELETE_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
