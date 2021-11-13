import { useState, useEffect } from 'react';
import { MediaDB } from '@/domain';

const media = ({ meta, setMeta }) => {
  const propStyle = {
    position: 'relative',
    height: '100%',
    width: '100%',
  };
  return (
    <div style={propStyle}>
      <MediaDB meta={meta} />
    </div>
  );
};

export default media;
