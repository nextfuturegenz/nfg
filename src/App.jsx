import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/index.jsx";
import { RecoilRoot } from "recoil";

export const App = () => {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={Router} />
      </RecoilRoot>
    </React.StrictMode>
  )
}