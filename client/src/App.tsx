import React, { useEffect, useState } from "react";
import "./App.css";

import { PAGES } from "./shared/data/pages";
import { NavigationBar } from "./shared/components/navigation-bar/NavigationBar";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${isContentLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Router>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            {PAGES.map((page) => (
              <Route key={page.name} path={page.path} element={page.element} />
            ))}
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
