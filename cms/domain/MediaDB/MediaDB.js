import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMedia } from '../../actions/media.actions';

import { Form, View, Header } from './';

import css from './style.module.scss';

export const MediaDB = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [view, setView] = useState('list');
  const [activeId, setActiveId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    alt: '',
    description: '',
    height: 0,
    width: 0,
    fileName: '',
    tags: [],
    programs: [],
    urls: {
      root: '',
      full: '',
      regular: '',
      small: '',
      thumb: '',
    },
    createdBy: '',
    createdAt: '',
  });

  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);

  function clear() {
    setActiveId(null);
    setFormData({
      title: '',
      alt: '',
      description: '',
      height: 0,
      width: 0,
      fileName: '',
      tags: [],
      programs: [],
      urls: {
        root: '',
        full: '',
        regular: '',
        small: '',
        thumb: '',
      },
      createdBy: '',
      createdAt: '',
    });
  }

  const mediaData = useSelector(state => state.media);

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <Header setView={setView} activeId={activeId} />
      </header>

      <div className={css.view}>
        <View
          data={mediaData}
          view={view}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>

      <aside
        className={`${css.form} ${(activeId || showForm) && css.form_open}`}
      >
        <Form
          formData={formData}
          setFormData={setFormData}
          activeId={activeId}
          onClose={() => clear()}
        />
      </aside>
    </div>
  );
};
