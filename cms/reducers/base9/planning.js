import {
  GET_PLANS,
  CREATE_PLAN,
  GET_PLAN,
  UPDATE_PLAN,
  DELETE_PLAN,
} from '@/actions/actionTypes';

const planning = (plans = initialProps, action) => {
  switch (action.type) {
    case GET_PLANS:
      return action.payload;
    case CREATE_PLAN:
      return [...plans, action.payload];
    case UPDATE_PLAN:
      return plans.map(plan =>
        plan._id === action.payload._id ? action.payload : plan,
      );
    case DELETE_PLAN:
      return plans.filter(plan => plan._id === action.payload);
    default:
      return plans;
  }
};

const initialProps = [];

export default planning;
