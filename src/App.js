import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <BrowserRouter>

          <Switch>
            {routes.map(({path, component:Component, exact}, i) => (
              <Route 
                key={i}
                path={path}
                exact={exact}
              >
                <Component/>
              </Route>
            ))}
            
          </Switch>
     
        </BrowserRouter>
      </CssBaseline>
    </div>
  );
}

export default App;
