import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import jwtDecode from "jwt-decode";
import { setCurrentUser } from "../actions/auth.actions";

const setMetaOnRefresh = (meta, setMeta) => {
  useEffect(() => {
    const localToken = window.localStorage.getItem("jwtToken");
    const userdata = jwtDecode(localToken);
    setMeta({
      ...meta,
      user: userdata.username,
      id: userdata._id,
    });
  }, []);
  return;
};

export default setMetaOnRefresh;
