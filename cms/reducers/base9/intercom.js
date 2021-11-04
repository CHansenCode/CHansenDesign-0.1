import { GET_MY_INTERCOMS, POST_TO_INTERCOM, DELETE_INTERCOM_POST } from "../../actions/base.actionTypes";

const intercom = (intercomChats = initialProps, action) => {
  switch (action.type) {
    case GET_MY_INTERCOMS:
      return action.payload;
    case POST_TO_INTERCOM:
      return [...intercomChats, action.payload];
    case DELETE_INTERCOM_POST:
      return intercomChats;
    default:
      return intercomChats;
  }
};

const initialProps = [];

export default intercom;
