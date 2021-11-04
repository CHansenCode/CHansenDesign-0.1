import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import checkTokenAndRedirect from "../utils/checkTokenAndRedirect";

import Section from "../components/Section/Section";
import StyleBox from "../components/StyleBox/StyleBox";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import Loading from "../components/Loading/Loading";

import ObjectViewer from "../components/ObjectViewer/ObjectViewer";

import { LOGIN_CREDENTIALS_FAILED_RESET } from "../actions/actionTypes";
import { onSubmitLoginUser } from "../actions/auth.actions";

import siteSetup from "../config/siteSettings.json";

export const Home = ({ meta, setMeta }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  checkTokenAndRedirect();

  const failedAuth = useSelector((state) => state.errorHandler.loginCredentials);

  function onChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    failedAuth && dispatch({ type: LOGIN_CREDENTIALS_FAILED_RESET });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(onSubmitLoginUser(formData, setLoading));
  };

  return (
    <Section flex center column minHeight="100vh">
      <StyleBox padding="2rem" width="30rem">
        <Form padding="0" onSubmit={onSubmit}>
          <h6 className="error">{failedAuth}</h6>
          <Input label="username" id="username" onChange={(e) => onChange(e)} />
          <Input label="password" type="password" id="password" placeholder="password" onChange={(e) => onChange(e)} />
          <button>Log in</button>
        </Form>
        <ObjectViewer data={formData} />
      </StyleBox>
      {loading ? <Loading /> : ""}
    </Section>
  );
};

export default Home;
