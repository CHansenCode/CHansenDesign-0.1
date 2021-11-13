import {
  GET_CONTACT_FORM_POSTS,
  POST_CONTACT_FORM_POST,
  DELETE_CONTACT_FORM_POST,
} from '@/actions/actionTypes';

const contact = (contactPosts = initialProps, action) => {
  switch (action.type) {
    case GET_CONTACT_FORM_POSTS:
      return action.payload;
    case POST_CONTACT_FORM_POST:
      return [...contactPosts, action.payload];
    case DELETE_CONTACT_FORM_POST:
      return contactPosts.filter(post => post._id === action.payload);
    default:
      return contactPosts;
  }
};

const initialProps = [];

export default contact;
