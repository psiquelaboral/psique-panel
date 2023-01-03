import React from "react";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Employes from "../pages/Employes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/employe" element={<Employes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
