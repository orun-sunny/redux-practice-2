import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/reusable/Loading";
import {useSelector} from "react-redux";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const {} =useSelector((state)=>state.auth)
  const isLoading = false;
  const email = "test@gmail.com";

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to='/login' state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
