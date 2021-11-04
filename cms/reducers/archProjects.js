import {
  GET_ARCH_PROJECTS,
  CREATE_ARCH_PROJECT,
  GET_ARCH_PROJECT,
  UPDATE_ARCH_PROJECT,
  DELETE_ARCH_PROJECT,
} from "../actions/actionTypes";

const archProjects = (archProjects = initialProps, action) => {
  switch (action.type) {
    case GET_ARCH_PROJECTS:
      return action.payload;
    case CREATE_ARCH_PROJECT:
      return [...archProjects, action.payload];
    case GET_ARCH_PROJECT:
      return action.payload;
    case UPDATE_ARCH_PROJECT:
      return archProjects.map((project) => (project._id === action.payload._id ? action.payload : project));
    case DELETE_ARCH_PROJECT:
      return action.payload;
    default:
      return archProjects;
  }
};

const initialProps = [];

export default archProjects;
