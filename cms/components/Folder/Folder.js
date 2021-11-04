import { useState } from "react";

import css from "./Folder.module.scss";

const Folder = () => {
  return (
    <div className={css.wrapper}>
      <Flaps />
      <View />
    </div>
  );
};

export default Folder;

const Flaps = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ul className={css.flaps}>
        <li>flap 1</li>
        <li>flap 2</li>
        <li>flap 3</li>
        <li>flap 4</li>
      </ul>
      <ul className={css.options}>
        <li>cow</li>
      </ul>
    </div>
  );
};

const View = () => {
  return (
    <div className={css.view}>
      <div>view</div>
    </div>
  );
};
