import React from "react";
import Home from "../pages/home/Home";
import Employes from "../pages/employes/Employes";
import { HashRouter, Routes, Route } from "react-router-dom";
import RouteLayout from "./routes/RouteLayout";
import PrivateRoute from "./routes/PrivateRoute";
import AuthPage from "../pages/auth";
import Psychometrics from "../pages/psychometrics/Psychometrics";
import Dashboard from "../pages/psychometricsManager/dashboard/Dashboard";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <RouteLayout element={Home} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/employe"
          element={
            <PrivateRoute>
              <RouteLayout element={Employes} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/psychometrics"
          element={
            <PrivateRoute>
              <RouteLayout element={Psychometrics} />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<AuthPage />} />

        <Route
          exact
          path="/quiz/psychometric/:quizId/:employeeId"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
