import { useState } from "react";

import Folder from "../components/Folder/Folder";
import Section from "../components/Section/Section";
import Users from "../domain/Users";

const users = ({ meta, setMeta }) => {
  const [view, setView] = useState("home");
  return (
    <Section>
      <h4 className="interaction title">SETTINGS PAGE</h4>
      <div>
        <p>what would you like to change?</p>
        <div className="cow">
          <button className={`${view === "home" && "active"}`} onClick={() => setView("home")}>
            Home
          </button>
          <button className={`${view === "users" && "active"}`} onClick={() => setView("users")}>
            Users
          </button>
          <button className={`${view === "cow" && "active"}`} onClick={() => setView("cow")}>
            cow
          </button>
          <button className={`${view === "more" && "active"}`} onClick={() => setView("more")}>
            more
          </button>
        </div>
      </div>
      <Folder />
    </Section>
  );
};

export default users;
