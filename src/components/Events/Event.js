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
import PaperBox from '../Shared/PaperBox';

const Event = ({event}) => {
  return (
    <Grid xs={4} item>
      <PaperBox elevation={5}>
        {event.name}
      </PaperBox>
    </Grid>
  );
};

export default Event;
