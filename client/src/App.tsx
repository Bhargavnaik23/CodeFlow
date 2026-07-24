import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Notes from "./pages/Notes";
import Courses from "./pages/Courses";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;