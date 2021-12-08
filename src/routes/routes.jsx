import React from "react";

import { Routes, Route } from "react-router-dom";

import Orders from "../Components/Orders";
import Storage from "../Components/Storage";

export default function RoutesPath() {
  return (
    <Routes>
      <Route exact path="/" element={<Storage />} />
      <Route path={process.env.PUBLIC_URL} element={<Storage />} />
      <Route
        path={process.env.PUBLIC_URL + "/grupo1-frontend/Orders"}
        element={<Orders />}
      />
      <Route
        path={process.env.PUBLIC_URL + "/grupo1-frontend/Storage"}
        element={<Storage />}
      />
    </Routes>
  );
}
