import axios from "axios";
import { GET_PLANS, CREATE_PLAN, UPDATE_PLAN, DELETE_PLAN } from "../actions/actionTypes";

import uniqueIdGenerator from "../utils/uniqueIdGenerator";

import * as api from "../api";

export const getPlannings = () => async (dispatch) => {
  try {
    const { data } = await api.getPlannings();

    dispatch({ type: GET_PLANS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPlanning = () => async (dispatch) => {
  let username = window.localStorage.getItem("username");
  let newPlanning = {
    id: uniqueIdGenerator(),
    owners: [username],
    users: [username],
    title: "",
    deadline: "",
    startTime: "",
    category: "",
    body: "",
    stages: [
      {
        id: uniqueIdGenerator(),
        title: "",
        v: "0.0.1",
        deadline: "",
        body: "",
        tasks: [
          {
            id: uniqueIdGenerator(),
            title: "",
            v: "0.0.1",
            deadline: "",
            subtasks: [
              {
                assignedTo: [],
                id: uniqueIdGenerator(),
                title: "",
                timeRemaining: 0,
                resolved: false,
              },
            ],
          },
        ],
      },
    ],
  };
  try {
    const { data } = await api.createPlanning(newPlanning);

    dispatch({ type: CREATE_PLAN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePlannings = (updatedPlanning) => async (dispatch) => {
  let id = updatedPlanning._id;

  try {
    const { data } = await api.patchPlanning(updatedPlanning, id);

    dispatch({ type: UPDATE_PLAN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePlanning = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePlanning(id);

    dispatch({ type: DELETE_PLAN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
