//libraries
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

//components
import RouteLayout from "./routes/RouteLayout";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "@pages/home/Home";
import Employes from "@pages/employes/Employes";
import AuthPage from "@pages/auth";
import Psychometrics from "@pages/psychometrics/Psychometrics";
import Dashboard from "@pages/psychometricsManager/dashboard/Dashboard";
import Quiz from "@pages/quiz/Quiz";

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
        <Route
          exact
          path="/quiz"
          element={
            <PrivateRoute>
              <RouteLayout element={Quiz} />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<AuthPage />} />

        <Route
          exact
          path="/quiz/psychometric/:quizId/:employeeId/:token"
          element={<Dashboard />}
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
