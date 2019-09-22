import React from 'react';
import {
  AppBar,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography
} from "@material-ui/core";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import Loader from '../../components/Shared/Loader';
import Events from '../../components/Events';
import * as actions from './actions';
import { makeSelectIsFetching, makeSelectEvents } from './selectors';

class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    this.props.getEvents();
  };

  render() {
    const {
      isFetching,
      events,
    } = this.props;
    return (
      <Grid>
        <AppBar position="static" color="default"/>
        <Events events={events} />
        <Loader timedOut={isFetching}/>
      </Grid>
    );
  }
}

Events.propTypes = {
  isFetching: PropTypes.bool,
  events: PropTypes.array,
  getEvents: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
  [
    makeSelectIsFetching(),
    makeSelectEvents()],
  (isFetching, events) => ({
    isFetching,
    events,
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actions,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
