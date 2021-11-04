import { useEffect } from "react";
import { useSelector } from "react-redux";

import Comment from "./Comment";
import PostComment from "./PostComment";
import Loading from "../../../components/Loading/Loading";

import css from "./Comments.module.scss";

const CommentLog = ({ activeId }) => {
  const activeTicket = useSelector((state) =>
    activeId ? state.tickets.find((ticket) => ticket._id === activeId) : null
  );

  useEffect(() => {
    console.log(activeTicket);
  }, [activeTicket]);

  return (
    <div className={css.Comments}>
      {/* {activeTicket.comments.map((comment) => (
        <Comment data={comment} key={comment._id} />
      ))} */}
      <PostComment onChange={() => e.preventDefault()} />
    </div>
  );
};

export default CommentLog;
