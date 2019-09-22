import React from 'react';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Home from './containers/Home';
import Events from './containers/Events';
import NotFound from './containers/NotFound';
import { history } from './store';
import theme from './utils/mui-theme';

export default () => (
    <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <ConnectedRouter history={history}>
              <Router>
                <Switch>
                    <Route path="/" exact component={Events} />
                    {/* <ProtectedRoute path="/" exact component={} displayHeader /> */}
                    <Route path="*" component={NotFound} />
                </Switch>
              </Router>
            </ConnectedRouter>
        </MuiPickersUtilsProvider>
    </MuiThemeProvider>
);
