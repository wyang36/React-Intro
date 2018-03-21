import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: '0', name: 'Max', age: 28 },
            { id: '1', name: 'Manu', age: 29 },
            { id: '2', name: 'Kira', age: 27 }

        ],
        showPersons: false
    }
    //methods:
    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { id: '0', name: 'Max', age: 28 },
                { id: '1', name: event.target.value, age: 29 },
                { id: '2', name: 'Kira', age: 27 }

            ]
        })
    }

    deleteNameHandler = (index) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);

        this.setState({ persons: persons });
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
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deleteNameHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id} />;
                        })
                    }
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
