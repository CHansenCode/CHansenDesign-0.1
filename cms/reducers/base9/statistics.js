import {
  GET_STATISTICS,
  UPDATE_STATISTICS,
  DELETE_STATISTICS,
} from '@/actions/actionTypes';

const statistics = (statistics = initialProps, action) => {
  switch (action.type) {
    case GET_STATISTICS:
      return action.payload;
    case UPDATE_STATISTICS:
      return statistics;
    case DELETE_STATISTICS:
      return statistics;
    default:
      return statistics;
  }
};

const initialProps = [];

export default statistics;
