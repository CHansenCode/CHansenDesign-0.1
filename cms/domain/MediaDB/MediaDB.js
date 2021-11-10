import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, View, Header } from './';
import { Button } from 'chansencode-lib';
import { mediaServer } from '@/config';

import { formConstructor } from './config';

import {
  getMedia,
  createMedia,
  updateMedia,
} from '../../actions/media.actions';

import css from './style.module.scss';

export const MediaDB = () => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [view, setView] = useState('list');
  const [activeId, setActiveId] = useState(null);
  const [formData, setFormData] = useState({
    //basic
    title: '',
    alt: '',
    description: '',

    category: '',
    project: '',
    drawingType: '',
    tags: [],
    programs: [],

    //advanced
    scale: 0,
    northRotation: 0,

    url: '',
  });

  const formDataConstruct = {};

  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);

  const selectedPost = useSelector(state =>
    activeId ? state.media.find(mediaPost => mediaPost._id === activeId) : null,
  );
  useEffect(() => {
    selectedPost && setFormData(selectedPost);
  }, [selectedPost]);

  function clear() {
    setActiveId(null);
    setShowForm(false);
    setFormData({
      title: '',
      alt: '',
      description: '',

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

  const mediaData = useSelector(state => state.media);

  return (
    <div className={css.main}>
      <header className={css.header}>
        {formData.url}
        {formData.category}
        <Header
          setView={setView}
          activeId={activeId}
          setShowForm={setShowForm}
        />
      </header>

      <div className={css.view}>
        <View
          data={mediaData}
          view={view}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>

      <>
        <Button
          text={activeId || showForm ? 'X' : '+ New Post'}
          className={`${css.open_toggle_btn} ${
            (activeId || showForm) && css.open_toggle_btn_formOpen
          }`}
          onClick={
            activeId || showForm ? () => clear() : () => setShowForm(true)
          }
        />
      </>
      <aside
        className={`${css.form_wrapper} ${
          (activeId || showForm) && css.form_open
        }`}
      >
        <Form
          formData={formData}
          setFormData={setFormData}
          activeId={activeId}
          onClose={() => clear()}
          handleSubmit={handleSubmit}
        />
      </aside>
    </div>
  );
};
