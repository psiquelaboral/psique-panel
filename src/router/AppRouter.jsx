import React from "react";
import Home from "../pages/home/Home";
import Employes from "../pages/employes/Employes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteLayout from "./routes/RouteLayout";
import AuthPage from "../pages/auth";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RouteLayout element={Home} />} />
        <Route
          exact
          path="/employe"
          element={<RouteLayout element={Employes} />}
        />
        <Route exact path="/login" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
