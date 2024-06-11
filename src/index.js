import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CheckboxProvider } from "./pages/SelectLevelPage/CheckboxContext";
import { LeaderboardProvider } from "./pages/LeaderboardPage/LeaderboardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LeaderboardProvider>
      <CheckboxProvider>
        <RouterProvider router={router}></RouterProvider>
      </CheckboxProvider>
    </LeaderboardProvider>
  </React.StrictMode>,
);
