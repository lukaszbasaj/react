import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    menu: {
        width: '80%',
    },
});
class Box extends Component {
    state = {
        inputText: '',
        task:[],
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownAdd = event => {
        event.preventDefault();
    };

    componentDidMount() {
        this.setState({
            inputText: this.props.task.name,
            task: this.props.task,
        })
    }



    render() {
        const { classes } = this.props;

        return (
            <FormControl
                className={classes.formControl}
            >
            </FormControl>
        )
    }
}

Box.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Box);