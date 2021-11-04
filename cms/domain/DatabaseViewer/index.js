import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import css from "./DatabaseViewer.module.scss";
import Loading from "../../components/Loading/Loading";

import { getMedia } from "../../api";

const DatabaseViewer = ({ title, data }) => {
  const dispatch = useDispatch();

  const [view, setView] = useState("list");

  const [sortation, setSortation] = useState({
    category: "date",
    order: true,
  });

  const [db, setDb] = useState([]);

  const lala = {
    title: "cow",
    category: "architecture",
    date: "2021-03-05 utc01223",
  };

  const store = useSelector((state) => state.media);

  return (
    <div className={css.wrapper}>
      <Header title={title}>
        <div className={css.title}>
          <h2>{title}</h2>
          <h4>db</h4>
        </div>
        {/* filter */}
        <div className={css.filter}>
          {/* <button
            onClick={() => {
              setSortation({ category: "date", order: !sortation.order });
            }}
            style={sortation.category == "date" ? activeStyle : null}
          >
            by Date: <div>^</div>
          </button>
          <button
            onClick={() => {
              setSortation({ category: "category", order: !sortation.order });
            }}
            style={sortation.category == "category" ? activeStyle : null}
          >
            by Category: <div>^</div>
          </button>
          <button
            onClick={() => {
              setSortation({ category: "project", order: !sortation.order });
            }}
            style={sortation.category == "project" ? activeStyle : null}
          >
            by Project:{" "}
            <div style={sortation.category == "project" && sortation.order == "descending" ? activeStyle : null}>^</div>
          </button> */}
        </div>

        {/* LIST VIEWS */}
        <div className={css.listView}></div>

        {/* TRIGGER BUTTONS */}
        <div className={css.triggers}>
          <button className={css.creation}>Add new +</button>
          <button className={css.deletion}>Acvitate: DELETION</button>
        </div>
      </Header>
      <Loading string="Connecting to database" />
      <Posts></Posts>
    </div>
  );
};

const Header = ({ title, children }) => {
  return <header>{children}</header>;
};

const Posts = ({ children }) => {
  return <div className={css.body}>{children}</div>;
};

const Post = () => {
  return (
    <div>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
    </div>
  );
};

export default DatabaseViewer;
