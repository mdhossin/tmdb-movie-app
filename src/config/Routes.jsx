import React from "react";

import { Route, Routes } from "react-router-dom";
import { Catalog, Home } from "../pages";
import Detail from "../pages/detail/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
    </Routes>
  );
};

export default Router;
