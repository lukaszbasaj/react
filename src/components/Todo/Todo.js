import React, {Component} from 'react';
import TasksList from './elements/TasksListElement';
import {connect} from 'react-redux';
import {add, search, remove, checkboxChange, init} from '../state';
import AddCircle from 'material-ui-icons/AddCircle';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';


const mapStateToProps = state => ({tasksList: state.tasks.tasks, query: state.tasks.query});

const mapDispatchToProps = dispatch => ({
    addNewTask: task => dispatch(add(task)),
    searchTask: value => dispatch(search(value)),
    checkboxChange: (taskId, checked, taskName) => dispatch(checkboxChange(taskId, checked, taskName)),
    removeTask: taskId => dispatch(remove(taskId)),
    initTasks: () => dispatch(init())
});

class Todo extends Component {

    state = {
        task: ''
    }

    componentWillMount() {
        this.props.initTasks();
    }

    textChanged = (event) => {
        this.setState({task: event.target.value});
    }

    searchChanged = (event) => {
        this.props.searchTask(event.target.value);
    }

    handleSubmit = (event) => {
        if (this.state.task !== '') {
            this.props.addNewTask(this.state.task);
            this.setState({task: ''});
        }
    }

    delTask = task => {
        this.props.removeTask(task);
    }

    onPressEnterKey = (event) => {
        if (event.charCode === 13 && this.state.task !== '') {
            event.preventDefault();
            this.props.addNewTask(this.state.task);
            this.setState({task: ''});
        }
    }

    checkboxChange = (task, checked, taskName) => {
        this.props.checkboxChange(task, checked, taskName);
    }

    render() {
        return (

                <Grid container spacing={18}>
            <Grid xs={7}>
                <div className="submit_box">

                    <TextField
                        placeholder="Add task"
                        value={this.state.task}
                        onChange={this.textChanged}
                        onKeyPress={this.onPressEnterKey}/>
                    <AddCircle
                        raised="raised"
                        color="primary"
                        mini="true"
                        dense="true"
                        onClick={this.handleSubmit}>
                        >

                    </AddCircle>
                </div>
            </Grid>
                    <TextField
                        placeholder="Search tasks"
                        onChange={this.searchChanged}
                        className="search"/>

                <Grid xs={12}>
                <TasksList
                    query={this.props.query}
                    tasks={this.props.tasksList}
                    checkboxChange={this.checkboxChange}
                    delTask={this.delTask}/>

                    </Grid>
                </Grid>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);