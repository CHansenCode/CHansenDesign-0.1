import { useSelector, useDispatch } from "react-redux";

import ListItem from "./ListItem";

import css from "./List.module.scss";

const List = ({ headline, activeId, setActiveId, onClickCreate }) => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);

  return (
    <div className={css.list}>
      <h3>{headline} :</h3>

      <div className={css.listItems}>
        {tickets.map((ticket, i) => (
          <ListItem key={ticket._id} data={ticket} onClick={() => setActiveId(ticket._id)} activeId={activeId} />
        ))}
      </div>
    </div>
  );
};

export default List;
