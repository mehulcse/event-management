import React from 'react';
import {
  AppBar,
  Grid,
} from "@material-ui/core";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import Loader from '../../components/Shared/Loader';
import Login from '../../components/Login';
import * as actions from './actions';

class LoginContainer extends React.Component {
  render() {
    const {
    } = this.props;
    return (
      <Login />
    );
  }
}

LoginContainer.propTypes = {};

export default connect(null, null)(LoginContainer);
