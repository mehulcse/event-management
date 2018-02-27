import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import { history } from './store';
export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/" exact component={Home} />
            {/*<ProtectedRoute path="/" exact component={} displayHeader />*/}
            <Route path="*" component={NotFound} />
        </Switch>
    </ConnectedRouter>
);
