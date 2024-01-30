import './App.css';

import * as reactRouterDom from 'react-router-dom';

import { PAGES } from './shared/data/pages';
import { NavigationBar } from './shared/components/navigation-bar/NavigationBar';

function App() {
  return (
    <>
      <reactRouterDom.BrowserRouter>
        <reactRouterDom.Routes>
          <reactRouterDom.Route path="/" element={<NavigationBar />}>
            {PAGES.map((page) => (
              <reactRouterDom.Route
                key={page.name}
                path={page.path}
                element={page.element}
              />
            ))}
          </reactRouterDom.Route>
          <reactRouterDom.Route
            path="*"
            element={<reactRouterDom.Navigate replace to="/" />}
          />
        </reactRouterDom.Routes>
      </reactRouterDom.BrowserRouter>
    </>
  );
}

export default App;
