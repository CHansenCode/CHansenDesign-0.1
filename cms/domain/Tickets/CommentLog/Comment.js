import { useEffect } from "react";

import css from "./Comments.module.scss";

const Comment = ({ data }) => {
  let localUser = window.localStorage.getItem("username");

  return (
    <div className={`${css.comment} ${css.comment_me}`}>
      <p className="secondary">{data.user}</p>
      <h5>{data.body}</h5>
    </div>
  );
};

export default Comment;
