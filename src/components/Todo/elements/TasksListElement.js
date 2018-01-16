import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Clear from 'material-ui-icons/Clear';
import { database } from '../../../firebase/firebase';
import Box from './BoxElement';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = theme => ({
    root: {
        width: '100%',
        background: theme.palette.background.paper,
    },
});
class TasksList extends React.Component {
    state = {
        idEditedField: '',
    };

    handleDelete = (id) => {
        database.ref('/todo/' + id)
            .remove()
    };

    handleCheck2 = (e) => {}

    handleCheck = (task, e) => {
        e.stopPropagation();
        database.ref('/tasks/' + task.id)
            .set({
                name: task.name,
                checked: !task.checked,
                timeStamp: task.timeStamp,
            })


    };



    returnText = (task) => {
        let dateFromTask =new Date(task.timeStamp);
        let dateString = dateFromTask.getFullYear() + '-' + (dateFromTask.getMonth() + 1) + '-' + dateFromTask.getDate();
        let timeString = dateFromTask.getHours() + ':' + dateFromTask.getMinutes() + ':' + dateFromTask.getSeconds();
        let dateTimeString = dateString + ' ' + timeString;
        return  this.state.idField !== task.id?(
            <Grid xs={12}>
                <ListItemText primary={task.name}
                              style={task.checked?{textDecoration: 'line-through', fontSize: 20}:{fontSize: 20} } />
                <Typography
                    gutterBottom
                    align="left"
                    style={{fontSize: 12, color: 'black' }}
                >{dateTimeString}</Typography>
            </Grid>

        ):( <Box
            task={task}
            resetId={this.resetIdField}
        />)
    }

    returnDelete = (task) => {
        return this.state.idField !== task.id?(
            <IconButton
                aria-label='Delete'
                onClick={() => this.handleDelete(task.id)}
            >
                <DeleteIcon color= 'child'/>
            </IconButton>
        ):(
            <IconButton
                aria-label='Clear'
                onClick={this.resetIdField}
            >
                <Clear color= 'primary'/>
            </IconButton>
        )
    }

    resetIdField = () => {
        this.setState({
            idField: '',
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid xs={12}>
                <List align="left">
                    {this.props.tasks
                        .map(task => (
                            <ListItem
                                key={task.id}
                                dense
                                button
                                className={classes.listItem}
                            >
                                <Checkbox
                                    checked={task.checked}
                                    onClick={(e) => this.handleCheck(task, e)}
                                    tabIndex={-1}
                                    disableRipple
                                />
                                { this.returnText(task) }
                                <ListItemSecondaryAction>
                                    {this.returnDelete(task)}
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                </List>
            </Grid>
        );
    }
}
TasksList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TasksList);