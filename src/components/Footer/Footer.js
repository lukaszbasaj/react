import React, { Component}  from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';


const today = new Date();

const styles = {
    root: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        width: '80%',
    },
};

type ProvidedProps = {
    classes: Object,
    theme?: Object,
};

function  Footer(props: ProvidedProps) {

    return (
        <Grid xs={12}>
            <Typography type="body2"
                        gutterBottom
                        align="center"
            >
                {today.getFullYear()}   &copy; Łukasz Basaj
            </Typography>
        </Grid>
    )

}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer);