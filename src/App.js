import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Paper from 'material-ui/Paper';
import Footer from './components/Footer';
import './App.css';

const App = (props) => (
    <div>
        <Paper className="paper_padding">
            <Header/>
            <Todo/>
            <Footer/>
        </Paper>
    </div>
)

export default App;