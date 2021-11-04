import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Form from "./Form/Form";
import List from "./List/List";
import Modal from "../../components/Modal/Modal";
import CommentLog from "./CommentLog/CommentLog";

import css from "./style.module.scss";

import { getTickets } from "../../actions/tickets.actions";

const Tickets = () => {
  const [activeId, setActiveId] = useState(null);
  const [options, setOptions] = useState({
    creatingNew: false,
    viewHistory: false,
    loading: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [activeId, dispatch]);

  const clear = () => {
    setActiveId(null);
    setOptions({ creatingNew: false, loading: false });
  };

  return (
    <>
      <Modal truthy={activeId || options.creatingNew} onClick={() => clear()}>
        <Form activeId={activeId} setActiveId={setActiveId} options={options} setOptions={setOptions} />
        {activeId ? <CommentLog activeId={activeId} /> : null}
      </Modal>

      <div className={css.main}>
        <Header onClick={() => setOptions({ ...options, creatingNew: true })} />
        {!options.viewHistory ? (
          <List
            headline="Open Tickets"
            activeId={activeId}
            setActiveId={setActiveId}
            onClickCreate={() => setOptions({ ...options, creatingNew: true })}
          />
        ) : (
          <List headline="Closed Tickets" activeId={activeId} setActiveId={setActiveId} />
        )}
      </div>
    </>
  );
};

const Header = ({ onClick }) => {
  return (
    <div className={css.header}>
      <div>
        <h3 className="secondary">TICKET SYSTEM</h3>
        <p>
          Here you can create tickets reporting on disfunctional parts of services of your website. Please fill out the
          ticket as detailed as you can, and it will be looked upon as soon as possible.
        </p>
      </div>

      <button onClick={onClick}>+ Create new ticket</button>
    </div>
  );
};

export default Tickets;
