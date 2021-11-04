import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TicketSilhouette from "./TicketSilhouette";
import Input from "../../../components/Input/Input";
import Textarea from "../../../components/Textarea/Textarea";
import Button from "../../../components/Button/Button";
import Select from "./Select/Select";

import css from "./Form.module.scss";

import { createTicket, patchTicket, deleteTicket } from "../../../actions/tickets.actions";

const Form = ({ activeId, setActiveId, options, setOptions }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    category: "",
    whatHappened: "",
    whatSupposed: "",
    etc: "",
    resolved: false,
    status: "",
    comments: [],
  });

  const dispatch = useDispatch();

  const activeTicket = useSelector((state) =>
    activeId ? state.tickets.find((ticket) => ticket._id === activeId) : null
  );

  useEffect(() => {
    if (activeTicket) setFormData(activeTicket);
  }, [activeTicket]);

  const clear = () => {
    setFormData({
      title: "",
      body: "",
      category: "",
      whatHappened: "",
      whatSupposed: "",
      etc: "",
      resolved: false,
      status: "",
      comments: [],
    });
    setActiveId(null);
    setOptions({ ...options, creatingNew: false });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!activeId) {
      dispatch(createTicket(formData));
    } else {
      dispatch(patchTicket(formData, activeId));
    }

    clear();
  };

  const onDelete = async (e) => {
    e.preventDefault();

    dispatch(deleteTicket(activeId));
    clear();
  };

  return (
    <>
      <form className={css.form} onSubmit={(e) => e.preventDefault()}>
        <h3>Ticket form</h3>

        <Input
          label="Name your"
          labelMargin="0.5rem"
          value={formData.title}
          id="title"
          onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
        />

        <Textarea
          label="Describe the issue"
          placeholderMargin="0.5rem"
          value={formData.body}
          id="body"
          onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
        />

        <Select formData={formData} setFormData={setFormData} />

        <Textarea
          label="What was supposed to happen?"
          placeholderMargin="0.5rem"
          value={formData.whatHappened}
          id="whatHappened"
          onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
        />

        <Textarea
          placeholder="What happened instead?"
          labelMargin="0.5rem"
          value={formData.whatSupposed}
          id="whatSupposed"
          onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
        />

        <Textarea
          placeholder="Other comments"
          labelMargin="0.5rem"
          value={formData.etc}
          id="etc"
          onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
        />
      </form>

      <div className={css.buttonWrapper}>
        {activeId ? (
          <Button className={css.patch} text="Save changes to ticket" onClick={(e) => onSubmit(e)} />
        ) : (
          <Button className={css.create} text="Create new ticket" onClick={(e) => onSubmit(e)} />
        )}

        <Button className={css.clear} text="Clear & Close" onClick={() => clear()} />

        {activeId && <Button className={css.delete} text="Delete ticket" onClick={(e) => onDelete(e)} />}
      </div>
    </>
  );
};

export default Form;
