import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import AddCircle from 'material-ui-icons/AddCircle';
import { database } from '../../../firebase/firebase';
import firebase from 'firebase';



const styles = theme => ({
    container: {
        flexGrow: 2,
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    menu: {
        width: '100%',
    },
});
class AddBox extends Component {
    state = {
        inputText: '',
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownAdd = event => {
        event.preventDefault();
    };

    handleClickAdd = () => {
        if (this.state.inputText.length > 0 ) {
            database.ref('/todo/')
                .push( {
                    name: this.state.inputText,
                    checked: false,
                    timeStamp: firebase.database.ServerValue.TIMESTAMP,
                })
                .then(() => {
                    this.setState({
                        inputText: '',
                    })
                })

        }
    };

    catchReturn = (ev) => {
        if (ev.key === 'Enter') {
            this.handleClickAdd();
            ev.preventDefault();
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl
                className={classes.formControl}
                fullWidth >
                <InputLabel htmlFor="inputField">Add task</InputLabel>
                <Input
                    id="inputField"
                    autoFocus
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleChange('inputText')}
                    onKeyPress={ this.catchReturn}
                    endAdornment={
                        <InputAdornment position="end">
                            <AddCircle
                                onClick={this.handleClickAdd}
                                onMouseDown={this.handleMouseDownAdd}

                            >

                            </AddCircle>
                        </InputAdornment>
                    }
                />
            </FormControl>
        )
    }
}

AddBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddBox);