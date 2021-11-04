import { useSelector, useDispatch } from "react-redux";

import Paragraph from "./Paragraph";

import css from "./Paragraphs.module.scss";

import { createNewParagraph } from "../../../actions/text.actions";

const Paragraphs = ({ activeId }) => {
  const activePage = useSelector((state) => (activeId ? state.texts.find((text) => text._id === activeId) : null));

  return (
    <>
      <div className={css.paragraphs}>
        <h2>paragraphs:</h2>
        {activePage
          ? activePage.paragraphs.map((paragraph) => (
              <Paragraph activeId={activeId} key={paragraph._id} data={paragraph} />
            ))
          : null}
      </div>
      <button className="secondary">+ Create new paragraph</button>
    </>
  );
};

export default Paragraphs;
