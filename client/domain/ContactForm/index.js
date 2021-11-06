import React, { useState, useEffect } from 'react';

import { Input } from './Input';
import { Form } from './Form';
import { Textarea } from './Textarea';
import { Button, Loading } from 'chansencode-lib';
import { baseAPI } from '../../config';

const index = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    message: '',
  });
  const [valid, setValid] = useState({
    name: false,
    contactInfo: false,
    message: false,
  });
  const [allValid, setAllValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //#region Validation
  //original forbidden, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¤]+/
  useEffect(() => {
    // all but   -   for double-names
    var forbidden = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?¤]+/;

    formData.name.length > 1 && !forbidden.test(formData.name)
      ? setValid({ ...valid, name: true })
      : setValid({ ...valid, name: false });
  }, [formData.name]);

  useEffect(() => {
    // all but   @ . -   for emails
    var forbidden = /[!#$%^&*()_+\=\[\]{};':"\\|,<>\/?¤]+/;
    var mustInclude = /[@]/;
    var mustAlsoInclude = /[.]/;

    formData.contactInfo.length > 4 &&
    !forbidden.test(formData.contactInfo) &&
    mustInclude.test(formData.contactInfo) &&
    mustAlsoInclude.test(formData.contactInfo)
      ? setValid({ ...valid, contactInfo: true })
      : setValid({ ...valid, contactInfo: false });
  }, [formData.contactInfo]);

  useEffect(() => {
    // all but   .,:)?!   for messages
    var forbidden = /[@#$%^&*(_+\-=\[\]{};'"\\|<>\/¤]+/;

    formData.message.length > 9 && !forbidden.test(formData.message)
      ? setValid({ ...valid, message: true })
      : setValid({ ...valid, message: false });
  }, [formData.message]);

  useEffect(() => {
    valid.name == true && valid.contactInfo == true && valid.message == true
      ? setAllValid(true)
      : setAllValid(false);
  }, [valid, allValid]);
  //#endregion

  function onSubmit(formData) {}

  function clear() {
    setFormData({ name: '', contactInfo: '', message: '' });
    setValid({ name: false, contactInfo: false, message: false });
  }

  return (
    <div>
      <Form title="Contact Form">
        <Input
          label="name"
          id="name"
          required
          valid={valid.name}
          infoOnHover="min 2 chars, no special chars allowed"
          value={formData.name}
          onChange={e =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
        <Input
          label="E-mail"
          id="contactInfo"
          required
          infoOnHover="cow"
          value={formData.contactInfo}
          valid={valid.contactInfo}
          onChange={e =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
        <Textarea
          label="message"
          id="message"
          required
          infoOnHover="cow"
          rows="5"
          value={formData.message}
          valid={valid.message}
          onChange={e =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            {allValid && (
              <Button text="Submit" type="green" onClick={onSubmit} />
            )}
            {isLoading && <Loading />}
          </div>

          <div>
            {formData.name.length > 0 ||
            formData.contactInfo.length > 0 ||
            formData.message.length > 0 ? (
              <Button type="yellow" onClick={() => clear()} text="Reset" />
            ) : null}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default index;
