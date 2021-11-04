import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import css from "./CreateNewPage.module.scss";

import { createNewPage } from "../../../actions/text.actions";

export const CreateNewPage = ({ clear }) => {
  const [formData, setFormData] = useState({ pageTitle: "" });
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (formData.pageTitle.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [formData]);

  const dispatch = useDispatch();

  const onClickCreateNewPage = () => {
    dispatch(createNewPage(formData));
    setFormData({ pageTitle: "" });
    clear();
  };

  return (
    <div className={css.main}>
      <div>
        <h3 className="secondary">Title of new page: </h3>
      </div>

      <Input onChange={(e) => setFormData({ ...formData, pageTitle: e.target.value })} />

      <div style={valid ? { opacity: "1", pointerEvents: "all" } : { opacity: "0.6", pointerEvents: "none" }}>
        <Button text="Create new page" onClick={() => onClickCreateNewPage()} />
      </div>
    </div>
  );
};

export default CreateNewPage;
