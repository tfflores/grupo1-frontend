import React from "react";

import { Routes, Route } from "react-router-dom";

import Orders from "../Components/Orders";
import Storage from "../Components/Storage";

export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Storage />} />
      <Route path="/grupo1-frontend" element={<Storage />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Storage" element={<Storage />} />
    </Routes>
  );
}
