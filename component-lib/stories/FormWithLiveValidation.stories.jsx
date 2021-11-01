import React, { useState, useEffect } from 'react';

import { Form, Input, Textarea } from '../components';

export default {
  title: 'CHansenCode/Form-with-live-validator',
  component: Form,
};

const Template = args => {
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

  //#region ****************************************************** VALIDATION
  useEffect(() => {
    // all but   -   for double-names
    var forbidden = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/;

    formData.name.length > 1 && !forbidden.test(formData.name)
      ? setValid({ ...valid, name: true })
      : setValid({ ...valid, name: false });
  }, [formData.name]);

  useEffect(() => {
    // all but   @ % .   for emails
    var forbidden = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;

    formData.contactInfo.length > 4 && !forbidden.test(formData.contactInfo)
      ? setValid({ ...valid, contactInfo: true })
      : setValid({ ...valid, contactInfo: false });
  }, [formData.contactInfo]);

  useEffect(() => {
    // all but   .,:)?!   for messages
    var forbidden = /[@#$%^&*(_+\-=\[\]{};'"\\|<>\/]+/;

    formData.message.length > 9 && !forbidden.test(formData.message)
      ? setValid({ ...valid, message: true })
      : setValid({ ...valid, message: false });
  }, [formData.message]);

  useEffect(() => {
    valid.name == true && valid.contactInfo == true && valid.message == true
      ? setAllValid(true)
      : setAllValid(false);
  }, [valid]);
  //#endregion ********************************************************************

  return (
    <Form {...args}>
      <Input
        label="name"
        id="name"
        required
        infoOnHover="cow"
        value={formData.name}
        onChange={e =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <Input
        label="contact"
        id="contact"
        value={formData.contact}
        onChange={e =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />
      <Textarea
        label="message"
        id="message"
        rows="5"
        value={formData.message}
        onChange={e =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />

      <div>
        {valid.name ? 'name true' : 'name false'}
        <br />
        {valid.contactInfo ? 'contactInfo true' : 'contactInfo false'} <br />
        {valid.message ? 'message true' : 'message false'} <br />
        {allValid ? 'allValid true' : 'all Valid false'}
      </div>
    </Form>
  );
};

export const form = Template.bind({});

form.args = {
  API: 'cow',
};
