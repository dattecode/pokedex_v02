import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { name } = useSelector((store) => store.trainer);
 
  if (name) {
    return <Outlet/>;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoutes;
