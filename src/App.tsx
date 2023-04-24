import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import CrewsList from "./pages/CrewsList";
import EditProfile from "./pages/EditProfile";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CrewsList />} />
        <Route path="/detail/:name" element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default App;
