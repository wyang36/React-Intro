import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>hello!</h1>
                <p>paragraph</p>
                <Person name="Max" age="28" />
                <Person name="Manu" age="29">My hobbies: racing.</Person>
                <Person name="Kira" age="27"/>
            </div>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hi?'));
    }
}

export default App;
