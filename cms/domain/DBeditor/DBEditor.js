import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'chansencode-lib';
import { Input, Textarea, Form } from '../../components';

import { getMedia } from '../../actions/media.actions.js';

import css from './DBEditor.module.scss';

const DBEditor = () => {
  const [showForm, setShowForm] = useState(false);
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMedia());
  }, []);

  const dataFromMediaServer = useSelector(state => state.media);

  const propStyle = {
    fixedForm: {
      right: !showForm ? '0' : '-100vw',
    },
  };

  return (
    <div className={css.main}>
      <header className={css.header}>
        <h3>Media database editor</h3>
        <div style={{ display: 'flex' }}>
          <Button square text="O" margin="0 1rem 0 0" />
          <Button square text="O" margin="0 1rem 0 0" />
          <Button square text="O" margin="0 1rem 0 0" />
        </div>
      </header>

      <div className={css.postsViewer}>
        {dataFromMediaServer.map(mediaPost => (
          <div key={mediaPost._id}>
            <h5>{mediaPost.title}</h5>
            <h5>{mediaPost.description}</h5>
            <h5>{mediaPost.filename}</h5>
            <h5>{mediaPost.urls.root + mediaPost.urls.full}</h5>
            <h5>{mediaPost.title}</h5>
            <Button text="edit" />
          </div>
        ))}
      </div>

      <div style={{ ...propStyle.fixedForm }} className={css.fixedForm}>
        <Form title={activeId ? activeId : '+ Creating new Media post'}>
          <>
            <br />
            <Input
              value={formData.title}
              placeholder="title"
              onChange={e =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <Textarea
              value={formData.description}
              placeholder="description"
              onChange={e =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows="3"
            />
            <Textarea
              value={formData.alt}
              placeholder="alt"
              onChange={e => setFormData({ ...formData, alt: e.target.value })}
              rows="3"
            />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '2rem',
              }}
            >
              <Input
                label="width"
                value={formData.width}
                placeholder="width"
                onChange={e =>
                  setFormData({ ...formData, width: e.target.value })
                }
              />
              <Input
                label="height"
                value={formData.height}
                placeholder="height"
                onChange={e =>
                  setFormData({ ...formData, height: e.target.value })
                }
              />
            </div>

            <Categories value={formData.tags} />

            {/* {formData.tags.map((tag, i) => (
              <Input key={`${tag}${i}`} placeholder={tag} />
            ))}

            {formData.programs.map((program, i) => (
              <div>{program}</div>
            ))} */}

            <br />
          </>

          <div className={css.buttons}>
            <Button text="Edit post" type="green" />
            <Button text="Edit post" type="red" />
            <Button text="Empty form" type="yellow" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DBEditor;

const Categories = (value, onAdd) => {
  const inline = {
    addNew: {
      border: 'thin solid',
      borderRadius: '0.5rem',
      padding: '0.25rem',
      margin: '0.25rem',
    },
    category: {
      border: 'thin solid',
      borderRadius: '0.5rem',
      padding: '0.25rem',
      margin: '0.25rem',
    },
  };
  return (
    <div>
      <h6>tags:</h6>
      <button style={inline.addNew}>+</button>
      {value.length > 0 &&
        value.map((category, i) => <h5 style={inline.category}></h5>)}
    </div>
  );
};
