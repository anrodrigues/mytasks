import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from './routes'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
          <Switch>
            {routes.map((route, i) => (
              <Route 
                key={i}
                path={route.path}
                exact={route.exact}
              >
                {route.component}
              </Route>
            ) )}
            
          </Switch>
     
        </BrowserRouter>
    </div>
  );
}

export default App;
