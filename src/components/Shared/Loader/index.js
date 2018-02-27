import React from 'react';
import PropTypes from 'prop-types';
import loder from '../../../assets/images/loader.gif';
import './styles.css';

const LoadingWrapper = ({ children }) => (
    <div className="loading-container-wrapper">
        <div className="loading-container">{children}</div>
    </div>
);

LoadingWrapper.propTypes = {
    children: PropTypes.object,
};

const Loading = props => {
    if (props.error) {
        return (
            <LoadingWrapper>
                <p>Something went wrong!</p>
            </LoadingWrapper>
        );
    }
    if (props.timedOut) {
        return (
            <LoadingWrapper>
                <div className="text-center mt-5"><img src={loder} alt="logo" /></div>
            </LoadingWrapper>
        );
    }
    if (props.pastDelay) {
        return (
            <LoadingWrapper>
                <span>
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </span>
            </LoadingWrapper>
        );
    }
    return null;
};

Loading.propTypes = {
    error: PropTypes.bool,
    timedOut: PropTypes.bool,
    pastDelay: PropTypes.bool,
};

export default Loading;
