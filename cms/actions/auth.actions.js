import jwtDecode from "jwt-decode";
import router from "next/router";

import setAuthToken from "../utils/setAuthToken";

import { SET_CURRENT_USER, LOGIN_CREDENTIALS_FAILED } from "./actionTypes";

import { authUser } from "../api";

export const onSubmitLoginUser = (formData, setLoading) => (dispatch) => {
  setLoading(true);

  const lowerCased = {
    username: formData.username.toLowerCase(),
    password: formData.password,
  };

  authUser(lowerCased)
    .then((res) => {
      let decoded = jwtDecode(res.data.token);
      dispatch(setCurrentUser(decoded.username));

      localStorage.setItem("jwtToken", res.data.token);
      localStorage.setItem("username", decoded.username);

      router.push("/landing");

      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_CREDENTIALS_FAILED,
        payload: "Incorrect credentials",
      });
      setLoading(false);
    });

  //     dispatch(setCurrentUser(decoded.username));
  //     setAuthToken(res.data.token);
};

export const setCurrentUser = (data) => {
  return {
    type: SET_CURRENT_USER,
    payload: data,
  };
};

export const logoutUser = () => (dispatch) => {
  //
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("username");
  setAuthToken(false);

  dispatch(setCurrentUser(null));
  router.push("/");
};
