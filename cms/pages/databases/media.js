import { useState, useEffect } from 'react';

import Section from '../../components/Section/Section';
import { Button } from 'chansencode-lib';

import DatabaseViewer from '../../domain/DatabaseViewer';
import Loading from '../../components/Loading/Loading';

import DBEditor from '../../domain/DBeditor/DBEditor';

const media = ({ meta, setMeta }) => {
  return (
    <Section flex height="100vh">
      <DBEditor />
    </Section>
  );
};

export default media;
