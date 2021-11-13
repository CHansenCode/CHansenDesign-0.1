import {
  GET_TICKETS,
  CREATE_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
} from './actionTypes';

import * as api from '../api';

export const getTickets = () => async dispatch => {
  try {
    const { data } = await api.getTickets();

    dispatch({ type: GET_TICKETS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTicket = formData => async dispatch => {
  try {
    const { data } = await api.createTicket(formData);

    dispatch({ type: CREATE_TICKET, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const patchTicket = (formData, id) => async dispatch => {
  try {
    const { data } = await api.patchTicket(formData, id);

    dispatch({ type: UPDATE_TICKET, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTicket = id => async dispatch => {
  try {
    const { data } = await api.deleteTicket(id);

    dispatch({ type: DELETE_TICKET, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
