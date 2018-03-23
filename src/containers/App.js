import React, { PureComponent } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('appjs inside construction', props);
        //this.state = {};
    }

    componentWillMount() {
        console.log('appjs component will mount');
    }

    componentDidMount() {
        console.log('appjs inside component did mount');
    }

    //shouldComponentUpdate(nextProps, nextState) {
    //    console.log('update appjs, inside shouldComponentUpdate', nextProps, nextState);
    //    //can use this to improve performance.
    //    return nextState.showPersons !== this.state.showPersons;
    //}

    componentWillUpdate(nextProps, nextState) {
        console.log('update appjs, inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('update appjs, inside componentDidUpdate', this.props);
    }

    state = {
        persons: [
            { id: '0', name: 'Max', age: 28 },
            { id: '1', name: 'Manu', age: 29 },
            { id: '2', name: 'Kira', age: 27 }

        ],
        showPersons: false,
        toggleClicked: 0
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
        const doesShow = this.state.showPersons;
        //DO NOT use this.state inside setState unless using prevState
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked+1
            }            
        });
    }

    render() {
        console.log('appjs inside render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons}
                    clicked={this.deleteNameHandler}
                    changed={this.nameChangedHandler} />
            );
        }

        

        return (
            <div className={Classes.App}>
                <button onClick={() => { this.setState({ showPersons: true }) }}> Show Persons</button>
                <Cockpit title={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler} />
                {persons}
            </div>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hi?'));
    }
}

export default App;
