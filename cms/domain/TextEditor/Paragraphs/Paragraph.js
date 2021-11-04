import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Input from "../../../components/Input/Input";
import Textarea from "../../../components/Textarea/Textarea";
import Button from "../../../components/Button/Button";

import css from "./Paragraphs.module.scss";

import { updateParagraph, deleteParagraph } from "../../../actions/text.actions";

const Paragraph = ({ activeId, data }) => {
  const [formData, setFormdata] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (data) {
      setFormdata(data);
    }
  }, [data]);

  const dispatch = useDispatch();

  return (
    <div className={css.paragraph}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 className="secondary">i am para</h4>
        <Button className="error" text="X" onClick={() => dispatch(deleteParagraph(activeId, data._id))} />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="title"
          value={formData.title}
          onChange={(e) => setFormdata({ ...formData, title: e.target.value })}
        />
        <Textarea
          label="body"
          value={formData.body}
          onChange={(e) => setFormdata({ ...formData, body: e.target.value })}
        />

        <Button text="Update paragraph" onClick={(e) => dispatch(updateParagraph(activeId, data._id, formData))} />
      </form>
    </div>
  );
};

export default Paragraph;
