import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, View, Header } from './';
import { Button } from 'chansencode-lib';

import { getMedia, createMedia, updateMedia } from '@/actions';

import css from './style.module.scss';

export const MediaDB = ({ meta }) => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [view, setView] = useState('list');
  const [activeId, setActiveId] = useState(null);
  const [formData, setFormData] = useState({
    //basic
    title: '',
    alt: '',
    description: '',
    filename: '',

    category: [],
    project: '',
    drawingType: '',
    tags: [],
    programs: [],

    //advanced
    scale: 0,
    northRotation: 0,

    src: {
      url: '',
      filename: '',
      url_3200: '',
      url_1600: '',
      url_800: '',
      url_400: '',
    },
  });

  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);

  const selectedPost = useSelector(state =>
    activeId ? state.media.find(mediaPost => mediaPost._id === activeId) : null,
  );

  useEffect(() => {
    selectedPost && setFormData({ ...formData, ...selectedPost });
  }, [selectedPost]);

  function clear() {
    setActiveId(null);
    setShowForm(false);
    setFormData({
      title: '',
      alt: '',
      description: '',
      filename: '',

      //indexing
      category: '',
      project: '',
      drawingType: '',
      tags: [],
      programs: [],

      //advanced options
      scale: 0,
      northRotation: 0,

      url: '',
    });
  }

  async function handleSubmit() {
    activeId ? dispatch(updateMedia) : dispatch(createMedia(formData));
  }

  async function onClose() {
    setActiveId(null);
    setShowForm(false);
    clear();
  }

  const mediaData = useSelector(state => state.media);

  return (
    <div className={css.main}>
      <header className={css.header}>
        <Header
          setView={setView}
          activeId={activeId}
          setShowForm={setShowForm}
        />
      </header>

      <div className={css.view}>
        <View
          meta={meta}
          data={mediaData}
          view={view}
          activeId={activeId}
          setActiveId={setActiveId}
          formData={formData}
        />
      </div>

      <aside
        className={`${css.form_wrapper} ${
          (activeId || showForm) && css.form_open
        }`}
      >
        <Form
          meta={meta}
          formData={formData}
          setFormData={setFormData}
          activeId={activeId}
          showForm={showForm}
          onClose={() => onClose()}
          onCreateNew={() => setShowForm(true)}
          handleSubmit={handleSubmit}
        />
      </aside>
    </div>
  );
};
