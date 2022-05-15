import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHook";
import React from "react";

interface Props {
  children: JSX.Element
  path?: string
}

const PrivateRoute = ({ children }: Props) => {
  const isAuth = useAppSelector(s => s.auth.isAuth)

  return isAuth ? children : <Navigate to="/sign-in" />;
}

export default PrivateRoute
