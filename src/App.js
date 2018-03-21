import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Kira', age: 27 }

        ],
        showPersons: false
    }
    //methods:
    switchNameHandler = (newName) => {
       //DON'T DO THIS!!!! this.state.persons[0].name = 'Maxine';
        this.setState({
            persons: [
                { name: newName, age: 30 },
                { name: 'Manu', age: 30 },
                { name: 'Stephanie', age: 30 }

            ]})
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Kira', age: 27 }

            ]
        })
    }

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'BBBBB')}
                        change={this.nameChangedHandler} > My hobbies: racing.</Person>
                    <Person
                        name={this.state.persons[2].name} age={this.state.persons[2].age} />
                </div>
            );
        }

        return (
            <div className="App">
                <h1>hello!</h1>
                <p>paragraph</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle person</button>
                {persons}
            </div>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hi?'));
    }
}

export default App;
