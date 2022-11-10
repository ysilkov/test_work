import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
