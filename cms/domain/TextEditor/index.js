import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageInfo from "./PageInfo/PageInfo";
import Paragraphs from "./Paragraphs/Paragraphs";
import SelectPage from "./SelectPage/SelectPage";
import CreateNewPage from "./CreateNewPage/CreateNewPage";

import Button from "../../components/Button/Button";
import ObjectViewer from "../../components/ObjectViewer/ObjectViewer";
import Modal from "../../components/Modal/Modal";

import css from "./style.module.scss";

import { getTexts } from "../../actions/text.actions";

const TextEditor = () => {
  const [options, setOptions] = useState({
    isEditing: false,
    isCreatingNewPage: false,
  });
  const [activeId, setActiveId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTexts());
  }, [dispatch, activeId]);

  const clear = () => {
    setActiveId(null);
    setOptions({ isEditing: false });
  };

  return (
    <>
      <div className={css.main}>
        <header className={css.header}>
          <SelectPage activeId={activeId} setActiveId={setActiveId} />
          <Button text="+ New page" onClick={() => setOptions({ ...options, isCreatingNewPage: true })} />
        </header>

        <div className={css.body}>
          <PageInfo activeId={activeId} />
          <Paragraphs activeId={activeId} />
        </div>
      </div>

      <Modal truthy={options.isCreatingNewPage} onClick={() => setOptions({ ...options, isCreatingNewPage: false })}>
        <CreateNewPage setOptions={setOptions} clear={() => clear()} />
      </Modal>
    </>
  );
};

export default TextEditor;

const dummyData = [
  {
    _id: "kasdjalskjd",
  },
];
