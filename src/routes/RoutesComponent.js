import React from "react";
import { Routes, useRoutes } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "../pages";
export const RoutesComponent = () => {
  return (
    <div>
      {useRoutes([
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
      ])}
    </div>
  );
};
