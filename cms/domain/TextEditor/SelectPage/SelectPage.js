import { useState } from "react";
import { useSelector } from "react-redux";

import css from "./SelectPage.module.scss";

const SelectPage = ({ activeId, setActiveId }) => {
  const [dropdown, setDropdown] = useState({
    height: "3rem",
  });

  const pages = useSelector((state) => state.texts);

  const clear = () => {
    setDropdown({ height: "3rem" });
  };

  const Page = ({ data, onClick }) => {
    return (
      <button onClick={onClick} className={css.page}>
        {data.pageTitle}
      </button>
    );
  };

  return (
    pages && (
      <div style={dropdown} className={css.pageSelector}>
        select page: {`${pages.length}`}
        <div className={css.dropdown}>
          {pages.map((page) => (
            <Page onClick={() => setActiveId(page._id)} key={page._id} data={page} />
          ))}
          <button onClick={() => setDropdown({ height: `${pages.length * 3}rem` })} className={css.icon}>
            v
          </button>
        </div>
      </div>
    )
  );
};

export default SelectPage;
