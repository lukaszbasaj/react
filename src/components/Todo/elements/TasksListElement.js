import React from 'react';
import Task from './TaskElement';

const TasksList = (props) => (

    <div className="List">
        {props.tasks
            .filter(task => task.name.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
            .map(task => (
                <Task
                    key={`task-${task.id}`}
                    checked={task.checked}
                    label={task.name}
                    checkboxChange={() => props.checkboxChange(task.id, task.checked, task.name)}
                    delTask={() => props.delTask(task.id)}/>
            ) )
        }
    </div>
);

export default TasksList;