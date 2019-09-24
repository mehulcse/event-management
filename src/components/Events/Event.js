import React from 'react';
import {
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    Button,
    Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
    return (
        <Grid xs={3} item>
            <Card>
                <CardContent>
                    <Box display="flex" justifyContent="center">
                        <Typography component="image">
                            <img src={event.cardImage}/>
                        </Typography>
                    </Box>
                    <Box display="inline-flex">
                        <Box my={2}>
                            <Typography variant="span" color="textPrimary">
                                {event.date}
                            </Typography>
                        </Box>
                        <Box mx={3}>
                            <Box maxWidth="270px" my={2}>
                                <Typography
                                    textOverflow="ellipses"
                                    overflow="hidden"
                                    maxWidth="270px"
                                    noWrap
                                    className="eventTitle"
                                >
                                    {event.title}
                                </Typography>
                            </Box>
                            <Box my={1}>
                                <Typography
                                    component="span"
                                    variant="span"
                                    className="eventLocation"
                                >
                                    {event.venue}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    component="h4"
                                    variant="span"
                                    color="textPrimary"
                                    className="eventCity"
                                >
                                    {event.city}
                                </Typography>
                            </Box>
                            <Box
                                color="primary.main"
                                bgcolor="background.paper"
                                fontFamily="h6.fontFamily"
                                fontSize="h4.fontSize"
                                my={1}
                            >
                                <Typography
                                    component="p"
                                    className="eventPrice"
                                >
                                    ${event.price}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`events/${event.id}`}
                    >
                        Details
                    </Button>
                </CardActions>
            </Card>

        </Grid>
    );
};
export default Event;
