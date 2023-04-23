import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Crews from "./pages/Crews";
import EditProfile from "./pages/EditProfile";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Crews />} />
        <Route path="/detail/:name" element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default App;
