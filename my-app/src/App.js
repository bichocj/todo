import {
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import Profile from './components/Profile';
import React from "react";

function App() {

  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        <Sidebar />
        <div className="col">
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
