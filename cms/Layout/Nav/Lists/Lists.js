import Navlink from "../NavLink/NavLink";

import navSetup from "../../../config/navSetup.json";
import css from "./Lists.module.scss";

const Lists = () => {
  return (
    <div className={css.wrapper}>
      {navSetup.map((category) => (
        <ul key={category.title}>
          <h4>{category.title}</h4>

          {category.subPages.map((page) => (
            <Navlink key={page.title} title={page.title} href={page.pageRoute} urlBarName={page.urlBarName} />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Lists;
