import {
  GET_TEXTS,
  GET_TEXT,
  CREATE_TEXT,
  UPDATE_TEXT,
  DELETE_TEXT,
  CREATE_NEW_PAGE,
  ADD_EMPTY_PARAGRAPH,
  DELETE_PARAGRAPH,
  UPDATE_PARAGRAPH,
} from '@/actions/actionTypes';

const texts = (texts = initialProps, action) => {
  switch (action.type) {
    case GET_TEXTS:
      return action.payload;
    case GET_TEXT:
      return texts.map(text => text._id === payload._id);
    case CREATE_TEXT:
      return [...texts, action.payload];
    case UPDATE_TEXT:
      return texts.map(text =>
        text._id === action.payload._id ? action.payload : text,
      );
    case DELETE_TEXT:
      return texts.filter(text => text._id === action.payload);

    case CREATE_NEW_PAGE:
      return texts.map(text => text._id === action.payload);

    case ADD_EMPTY_PARAGRAPH:
      return texts.filter(text => text._id === action.payload);

    case DELETE_PARAGRAPH:
      return texts.filter(text => text._id === action.payload);

    case UPDATE_PARAGRAPH:
      return texts.filter(text => text._id === action.payload);

    default:
      return texts;
  }
};

const initialProps = [];

export default texts;
