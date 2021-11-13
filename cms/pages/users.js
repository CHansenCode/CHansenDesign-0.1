import { useState } from 'react';

import Folder from '@/components/Folder/Folder';
import Section from '@/components/Section/Section';
import Users from '@/domain/Users';

const users = ({ meta, setMeta }) => {
  const [view, setView] = useState('home');
  return <Section></Section>;
};

export default users;
