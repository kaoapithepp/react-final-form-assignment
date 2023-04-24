import React from "react";
import { RouterProvider } from "react-router-dom";
import useRouteModel from "./routes";

const App: React.FC = () => {
  const { router } = useRouteModel();
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
