import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'


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

        const persons = [...this.state.persons];
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

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <ErrorBoundary
                                key={person.id}>
                                <Person
                                click={() => this.deleteNameHandler(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandler(event, index)}
                            /></ErrorBoundary>;
                        })
                    }
                </div>
            );

            btnClass = Classes.red;
        }

        const classes = [];
        if (this.state.persons.length <= 2)
            classes.push(Classes.red);
        if (this.state.persons.length <= 1)
            classes.push(Classes.bold);


        return (
            <div className={Classes.App}>
                <h1>hello!</h1>
                <p className={classes.join(' ')}>paragraph</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle person</button>
                {persons}
            </div>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hi?'));
    }
}

export default App;
