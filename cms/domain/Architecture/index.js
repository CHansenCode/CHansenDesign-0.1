import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../../components/Modal/Modal";

import Form from "./Form/Form";
import List from "./List/List";

import css from "./style.module.scss";

import { getArchProjects } from "../../actions/architecture.actions";

const Architecture = () => {
  const [activeId, setActiveId] = useState(null);
  const [options, setOptions] = useState({
    creatingNew: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArchProjects());
  }, [activeId, dispatch]);

  const clear = () => {
    setActiveId(null);
    setOptions({ ...options, creatingNew: false });
  };

  return (
    <div className={css.main}>
      <Modal truthy={activeId || options.creatingNew} onClick={() => clear()}>
        <Form activeId={activeId} setActiveId={() => clear()} options={options} setOptions={setOptions} />
      </Modal>
      <List activeId={activeId} setActiveId={setActiveId} options={options} setOptions={setOptions} />
      {activeId}
    </div>
  );
};

export default Architecture;
