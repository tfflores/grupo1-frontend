import React from "react";

import { Routes, Route } from "react-router-dom";
import Order from "../Components/Order";

import Orders from "../Components/Orders";
import Storage from "../Components/Storage";

export default function RoutesPath() {
  return (
    <Routes>
      <Route exact path="/" element={<Storage />} />
      <Route path="/grupo1-frontend/" element={<Storage />} />
      <Route path={process.env.PUBLIC_URL + "/Orders"} element={<Orders />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/grupo1-frontend/Orders" element={<Orders />} />
      <Route path="/grupo1-frontend/Orders" exact element={<Orders />} />
      <Route path="/Orders">
        <Orders />
      </Route>
      <Route path={process.env.PUBLIC_URL + "/Storage"} element={<Storage />} />
    </Routes>
  );
}
