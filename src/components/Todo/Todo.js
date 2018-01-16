import React, {Component} from 'react';
import AddBox from '../../components/Todo/elements/AddBoxElement';
import { database } from '../../firebase/firebase';
import TasksList from '../../components/Todo/elements/TasksListElement';
import FilterBox from '../../components/Todo/elements/FilterBoxElement';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            fiterText: '',

        }
    }
    componentDidMount() {
        database.ref('/todo/')
            .on('value', (snapshot) => {
                let items = snapshot.val();
                let newState = [];
                for (let item in items) {
                    newState.unshift({
                        id: item,
                        name: items[item].name,
                        checked: items[item].checked,
                        timeStamp: items[item].timeStamp,
                    });
                }
                this.setState({
                    tasks: newState});
            });
    };

    setFilterText = (fiterText) => {
        this.setState({fiterText: fiterText})
    };

    render() {
        return (
            <div>
                <div>
                    <AddBox />
                </div>
                <div>
                    <FilterBox changeFilter={this.setFilterText}/>
                </div>
                <TasksList
                    tasks = {this.state.tasks.filter(el => el.name.toUpperCase().search(this.state.fiterText.toUpperCase()) !== -1)} />
            </div>
        );
    }
}

export default ToDo;