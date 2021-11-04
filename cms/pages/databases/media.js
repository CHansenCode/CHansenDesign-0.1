import { useState, useEffect } from "react";

import Section from "../../components/Section/Section";

import DatabaseViewer from "../../domain/DatabaseViewer";
import Loading from "../../components/Loading/Loading";

const media = ({ meta, setMeta }) => {
  return (
    <Section flex center height="100vh">
      <Loading text="Connecting to database" />
      <DatabaseViewer db="Media" />
    </Section>
  );
};

export default media;
