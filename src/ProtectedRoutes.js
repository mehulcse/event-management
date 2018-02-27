import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TokenManager from 'utils/TokenManager';

import AppContainer from './containers/App';

const ProtectedRoute = ({ component: Component, displayHeader, ...rest }) => (
    <Route
        render={props => TokenManager.get() ? (
            <div>
                <AppContainer displayHeader={displayHeader}>
                    <div>
                        <Component {...props} />
                    </div>
                </AppContainer>
            </div>
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
        }
        {...rest}
    />
);

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    rest: PropTypes.object,
    location: PropTypes.object,
    displayHeader: PropTypes.bool,
};

export default ProtectedRoute;
