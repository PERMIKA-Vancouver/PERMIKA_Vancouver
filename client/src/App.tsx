import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { PAGES } from "./shared/data/pages";
import { NavigationBar } from "./shared/components/NavigationBar";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
