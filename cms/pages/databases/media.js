import { useState, useEffect } from 'react';

import { Button, Section } from 'chansencode-lib';
import { MediaDB } from '@/domain';

import css from './media.module.scss';

const media = ({ meta, setMeta }) => {
  return (
    <Section flex padding="0" minHeight="100vh" maxHeight="100vh">
      <MediaDB />
    </Section>
  );
};

export default media;
