import React, { PureComponent } from 'react';
import {Switch, Route} from 'react-router-dom';

import Routes from './routes.js';

class App extends PureComponent {
  render() {
    return (
      <Switch>
        {Routes.map((r,i) => {
          return <Route
            key={i}
            exact={r.exact}
            path={r.path}
            render={() => <Routing Layout={r.layout} Component={r.component} />}
          />
        })}
      </Switch>
    );
  }
}

const Routing = ({Layout, Component}) => {
  if (Layout) {
    return(
      <Layout>
        <Component />
      </Layout>
    );
  }
  return <Component />
}

export default App;
