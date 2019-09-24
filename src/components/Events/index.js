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
import Event from './Event';


const Events = ({events}) => {

  const renderEvents = () => events && events.length > 0 && events.map(event => <Event event={event} key={event.id}/> );

  return (
    <Grid xs={12} item>
      {renderEvents()}
    </Grid>
  );
};

export default Events;
