import React, { Component } from 'react';
import Header from './components/Header';
import ToDo from './components/ToDo';
import PropTypes from 'prop-types';

import './App.css';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const App = (props) => {
    const { classes } = props;
    return (
        <Grid
            container
            justify= "center"
        >
            <Grid
                xs={12}
                sm={6}
                align="center">
                <Card
                    className={classes.card}
                    align="center">
                    <CardContent align="center">
                        <Header/>
                        <ToDo />
                        <Footer/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
};

const styles = theme => ({
    card: {
        minWidth: 300,
        maxWidth: 600,
    },

});

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);