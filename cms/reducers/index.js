import { combineReducers } from "redux";

//base9
import auth from "./base9/auth";
import contact from "./base9/contact";
import intercom from "./base9/intercom";
import media from "./base9/media";
import planning from "./base9/planning";
import statistics from "./base9/statistics";
import texts from "./base9/texts";
import tickets from "./base9/tickets";
import users from "./base9/users";

import errorHandler from "./errorHandler";
import archProjects from "./archProjects";

export const reducers = combineReducers({
  //base9
  auth,
  contact,
  intercom,
  media,
  planning,
  statistics,
  texts,
  tickets,
  users,

  errorHandler,
  archProjects,
});
