import React from 'react';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Events from './containers/Events';
import Event from './containers/Event';
import Login from './containers/Login';
import Header from './components/Shared/Header';
import NotFound from './containers/NotFound';
import { history } from './store';
import theme from './utils/mui-theme';

export default () => (
  <MuiThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <CssBaseline/>
      <ConnectedRouter history={history}>
        <Router>
          <>
            <Header/>
            <Switch>
              <Route path="/" exact component={Events}/>
              <Route path="/events" exact component={Events}/>
              <Route path="/events/:id" exact component={Event}/>
              <Route path="/login" exact component={Login}/>
              {/* <ProtectedRoute path="/" exact component={} displayHeader /> */}
              <Route path="*" component={NotFound}/>
            </Switch>
          </>
        </Router>
      </ConnectedRouter>
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>
);
