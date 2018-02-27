import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import Loader from '../../components/Shared/Loader';
import Home from '../../components/Home';

import * as actions from './actions';
import { makeSelectIsFetching } from './selectors';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Home />
                <Loader timedOut={this.props.isFetching} />
            </div>
        );
    }
}

Login.propTypes = {
    isFetching: PropTypes.bool,
};

const mapStateToProps = createSelector(
    [makeSelectIsFetching()],
    (isFetching) => ({
        isFetching,
    })
);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...actions,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
