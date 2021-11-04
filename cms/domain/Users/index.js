import { AiOutlineUserAdd, AiOutlineUser, AiOutlineUserDelete } from "react-icons/ai";

import Profile from "./Profile/Profile";
import List from "./List/List";
import Form from "./Form/Form";

import css from "./style.module.scss";

const Users = () => {
  return (
    <div className={css.main}>
      <Profile />
      <List />
      <Form />
    </div>
  );
};

export default Users;
