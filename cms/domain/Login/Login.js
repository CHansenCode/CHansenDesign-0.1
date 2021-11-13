import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@/components';
import { Button } from 'chansencode-lib';

import { onSubmitLoginUser } from '@/actions';

import css from './Login.module.scss';

export const Login = () => {
  let user = window.localStorage.getItem('auth-token');

  const dispatch = useDispatch();

  const [formData, setFormdata] = useState({
    username: '',
    password: '',
  });
  const [valid, setValid] = useState({
    username: false,
    password: false,
  });
  const [allValid, setAllValid] = useState(false);

  //#region validation
  useEffect(() => {
    // all but   -
    var forbidden = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?¤]+/;
    formData.username.length > 2 && !forbidden.test(formData.username)
      ? setValid({ ...valid, username: true })
      : setValid({ ...valid, username: false });
  }, [formData.username]);
  useEffect(() => {
    // all but   -!?
    var forbidden = /[@#$%^&*()_+\=\[\]{};':"\\|,.<>\/¤]+/;
    formData.password.length > 2 && !forbidden.test(formData.password)
      ? setValid({ ...valid, password: true })
      : setValid({ ...valid, password: false });
  }, [formData.password]);
  useEffect(() => {
    valid.username && valid.password ? setAllValid(true) : setAllValid(false);
  }, [valid]);
  //#endregion

  const failedAuth = useSelector(state => state.errorHandler.loginCredentials);

  async function onSubmit() {
    dispatch(onSubmitLoginUser(formData));
  }

  return !user ? (
    <main className={css.main}>
      <div className={css.wrapper}>
        <Form title="CHansenDesign CMS login">
          <br />
          <Input
            label="username"
            onChange={e =>
              setFormdata({ ...formData, username: e.target.value })
            }
          />
          <Input
            label="password"
            type="password"
            onChange={e =>
              setFormdata({ ...formData, password: e.target.value })
            }
          />

          <div style={{ width: '80%' }}>
            {allValid ? (
              <Button margin="2rem 0 0 0" text="Login" onClick={onSubmit} />
            ) : (
              <Button margin="2rem 0 0 0" text="Please enter credentials" />
            )}
          </div>
        </Form>
      </div>
    </main>
  ) : null;
};
