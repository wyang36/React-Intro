import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot} from 'radium';
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
    nameChangedHandler = (event, index) => {
        //const personIndex = this.state.persons.findIndex(p => {
        //    return p.id === id;
        //});

        const person = { ...this.state.persons[index] };
        person.name = event.target.value;

        const persons = [ ...this.state.persons ];
        persons[index] = person;

        this.setState({ persons: persons });
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
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
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
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, index)}
                            />;
                        })
                    }
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'pink',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.persons.length <= 2)
            classes.push('red');
        if (this.state.persons.length <= 1)
            classes.push('bold');


        return (
            <StyleRoot>
                <div className="App">
                    <h1>hello!</h1>
                    <p className={classes.join(' ')}>paragraph</p>
                    <button style={style} onClick={this.togglePersonsHandler}>Toggle person</button>
                    {persons}
                </div>
            </StyleRoot>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hi?'));
    }
}

export default Radium(App);
