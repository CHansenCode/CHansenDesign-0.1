import { useState, useEffect } from 'react';

import { Section } from '@/components';

import css from './index.module.scss';

export const Landing = ({ meta, setMeta }) => {
  return (
    <Section>
      <div className={css.wrapper}></div>
    </Section>
  );
};

export default Landing;
