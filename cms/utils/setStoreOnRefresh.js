import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import jwtDecode from "jwt-decode";
import { setCurrentUser } from "../actions/auth.actions";
import { SET_CURRENT_USER } from "../actions/actionTypes";

const setStoreOnRefresh = () => {};

export default setStoreOnRefresh;
