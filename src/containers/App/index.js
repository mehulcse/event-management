import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Header from '../../components/Shared/Header';
import Footer from '../../components/Shared/Footer';
import If from '../../components/Shared/If';

class App extends Component {
    render() {
        const {
            children,
            displayHeader,
        } = this.props;
        return (
            <div>
                <If condition={displayHeader}>
                    <Header />
                </If>
                <main>{React.Children.map(children, child => React.cloneElement(child, omit([this.props, 'children'])))}</main>
                <If condition={displayHeader}>
                    <Footer />
                </If>
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.object,
    displayHeader: PropTypes.bool,
};

export default withRouter(connect(null, null)(App));
