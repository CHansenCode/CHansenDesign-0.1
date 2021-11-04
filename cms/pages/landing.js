import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Section from "../components/Section/Section";
import ObjectViewer from "../components/ObjectViewer/ObjectViewer";

import css from "./styles/landing.module.scss";

import setStoreOnRefresh from "../utils/setStoreOnRefresh";
import setMetaOnRefresh from "../utils/setMetaOnRefresh";
import { SET_CURRENT_USER } from "../actions/actionTypes";

import { getContacts } from "../actions/contact.actions";
import { getIntercoms } from "../actions/intercom.actions";
import { getMedia } from "../actions/media.actions";
import { getPlannings } from "../actions/planningApp.actions";
import { getStatistics } from "../actions/statistics.actions";
import { getTexts } from "../actions/text.actions";
import { getTickets } from "../actions/tickets.actions";
import { getUsers } from "../actions/users.actions";

const landing = ({ meta, setMeta }) => {
  const dispatch = useDispatch();

  const storeData = useSelector((state) => state);
  const username = useSelector((state) => state.auth.user);

  return (
    <Section slideIn minHeight="100vh">
      <div className={css.gridContainer}>
        {/* GREETING */}
        <div className={css.hello}>
          <h4>Logged in as {meta.user}, what do you want to do today?</h4>
        </div>
        {/* THINGS HAPPENING */}
        <div className={css.updates}>since you were last online</div>
        <div className={css.dbload}>
          <h4>base 9 (-auth, not a db)</h4>

          <Button text="Contact" onClick={() => dispatch(getContacts())} />
          <Button text="intercom" onClick={() => dispatch(getIntercoms())} />
          <Button text="Media" onClick={() => dispatch(getMedia())} />
          <Button text="Planning" onClick={() => dispatch(getPlannings())} />
          <Button text="Statistics" onClick={() => dispatch(getStatistics())} />
          <Button text="Texts" onClick={() => dispatch(getTexts())} />
          <Button text="Tickets" onClick={() => dispatch(getTickets())} />
          <Button text="Users" onClick={() => dispatch(getUsers())} />
        </div>
        <div className={css.messages}>chatlog</div>
        <div className={css.quickstats}>
          <ObjectViewer title="store Data" fontSize="12px" data={storeData} />
        </div>
        <div className={css.upcoming}>
          <ObjectViewer title="meta Data" fontSize="12px" data={meta} />
        </div>
      </div>
    </Section>
  );
};

const cow = {
  hello: "lala",
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default landing;
