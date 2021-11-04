import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../components/Input/Input";
import Textarea from "../../../components/Textarea/Textarea";
import Button from "../../../components/Button/Button";
import Image from "../../../components/Image/Image";
import TickBox from "../../../components/TickBox/TickBox";

import MediaPicker from "./MediaPicker";

import DustBackground from "../../../public/svg/DustBackground";

import css from "./Form.module.scss";

import { createArchProject, patchArchProject } from "../../../actions/architecture.actions";

const Form = ({ activeId, setActiveId }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    body: "",
    tags: [],
    heroUrl: "",
    published: false,

    pages: [
      {
        title: "",
        subtitle: "",
        imgUrl: "",
        paragraphs: [""],
      },
    ],

    media: [
      {
        title: "",
        description: "",
        scale: 0,
        northRotation: 0,
        tags: [],
        programs: [],
        drawingType: "",
        url: "",
      },
    ],
  });

  const dispatch = useDispatch();

  const activeProject = useSelector((state) =>
    activeId ? state.archProjects.find((project) => project._id === activeId) : null
  );

  useEffect(() => {
    if (activeProject) setFormData(activeProject);
  }, [activeProject]);

  const clear = (e) => {
    e.preventDefault();
    setFormData({
      title: "",
      subtitle: "",
      body: "",
      tags: [],
      heroUrl: "",
      published: false,

      pages: [
        {
          title: "",
          subtitle: "",
          imgUrl: "",
          paragraphs: [""],
        },
      ],

      media: [
        {
          title: "",
          description: "",
          scale: 0,
          northRotation: 0,
          tags: [],
          programs: [],
          drawingType: "",
          url: "",
        },
      ],

      createdBy: "",
      createdAt: "",
    });
    setActiveId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDATION

    //CREATOR FROM LOCAL

    const loggedUser = localStorage.getItem("username");
    console.log(loggedUser);

    if (!activeId) {
      dispatch(createArchProject(formData));
    } else {
      dispatch(patchArchProject(formData));
    }

    clear(e);
  };

  return (
    <div className={css.main}>
      <LiveFrame>
        <form className={css.form} action="#" onSubmit={() => e.preventDefault()}>
          <DustBackground />

          <div className={css.header}>
            <div>
              <Input
                id="title"
                info="between 1 & 32 characters"
                className={css.title}
                placeholder="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
              />
              <Input
                id="subtitle"
                className={css.subtitle}
                placeholder="subtitle"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
              />
              <Textarea
                id="body"
                rows="5"
                placeholder="Project description"
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
              />
            </div>
            <div>{formData.heroUrl ? <Image src={formData.heroUrl} /> : <Image />}</div>
          </div>

          {formData.pages.map((page, i) => (
            <Page key={`${page.title}${i}`} data={page} onClick={() => onClickCreateParagraph(i)} />
          ))}

          <MediaPicker />
        </form>
      </LiveFrame>

      <div className={css.buttons}>
        {!activeId ? (
          <Button className={css.saveNew} text="+ Create new project" onClick={(e) => handleSubmit(e)} />
        ) : (
          <Button className={css.patch} text="+ Update project & close" onClick={(e) => handleSubmit(e)} />
        )}

        <Button className={css.undo} text="+ Undo changes & close" onClick={(e) => clear(e)} />
      </div>
    </div>
  );
};

const LiveFrame = ({ children, published }) => {
  return (
    <div className={css.liveFrame}>
      <button>
        <span />
        <h3>Live</h3>
      </button>

      {children}
    </div>
  );
};

const Page = ({ data, onClick }) => {
  let paragraphs = data.paragraphs;
  return (
    <div className={css.page}>
      {paragraphs.map((paragraph, i) => (
        <h4 key={`pageParagraph${i}`}>{paragraph}</h4>
      ))}
      <button onClick={onClick}>add new paragrpah</button>
    </div>
  );
};

export default Form;

//Standard

const onClickCreateParagraph = (i) => {
  console.log(i);
};

const handleNestedStateOnChange = (e) => {
  const copy = formData.paragraphs;
};
