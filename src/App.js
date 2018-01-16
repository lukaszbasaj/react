import React from 'react';
import Header from './components/Header/Header';
import ToDo from './components/Todo/Todo';
import PropTypes from 'prop-types';
import Footer from './components/Footer/Footer';


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
                xs={6}
                sm={6}

                align="center">
                <Card
                    className={classes.card}
                    align="center"
                    vertical-align="middle"
                    >
                    <CardContent align="center"
                                 vertical-align="middle"
                    >
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
        maxWidth: 1200,
    },

});

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);