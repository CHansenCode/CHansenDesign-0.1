import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import jwtDecode from "jwt-decode";
import { setCurrentUser } from "../actions/auth.actions";

const checkTokenAndRedirect = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const localToken = window.localStorage.getItem("jwtToken");
    if (localToken) {
      const decoded = jwtDecode(localToken);
      dispatch(setCurrentUser(decoded.username));
      router.push("/landing");
    } else {
      return;
    }
  }, []);
  return;
};

export default checkTokenAndRedirect;
