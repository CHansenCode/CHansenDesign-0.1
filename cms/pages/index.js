import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'chansencode-lib';
import { Login } from '@/domain';

import checkTokenAndRedirect from '../utils/checkTokenAndRedirect';
import { LOGIN_CREDENTIALS_FAILED_RESET } from '../actions/actionTypes';
import { onSubmitLoginUser } from '../actions/auth.actions';

export const Landing = ({ meta, setMeta }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  checkTokenAndRedirect();

  const failedAuth = useSelector(state => state.errorHandler.loginCredentials);

  function onChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    failedAuth && dispatch({ type: LOGIN_CREDENTIALS_FAILED_RESET });
  }

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(onSubmitLoginUser(formData, setLoading));
  };

  return (
    <Section flex center column minHeight="100vh">
      <Login />
    </Section>
  );
};

export default Landing;
