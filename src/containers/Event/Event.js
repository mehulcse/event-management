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
import Event from '../../components/Event';
import * as actions from './actions';
import { makeSelectIsFetching, makeSelectEvent } from './selectors';

class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    const { match: { params: { id } } } = this.props;
    if(id){
      this.props.getEvent(id);
    }
  };

  render() {
    const {
      isFetching,
      event,
    } = this.props;
    return (
      <Grid>
        <AppBar position="static" color="default"/>
        <Event event={event} />
        <Loader timedOut={isFetching}/>
      </Grid>
    );
  }
}

EventContainer.propTypes = {
  isFetching: PropTypes.bool,
  event: PropTypes.array,
  getEvent: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
  [
    makeSelectIsFetching(),
    makeSelectEvent()],
  (isFetching, event) => ({
    isFetching,
    event,
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actions,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);
