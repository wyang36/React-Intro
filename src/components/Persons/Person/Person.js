import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('personjs inside construction', props);
        //this.state = {};
    }

    componentWillMount() {
        console.log('personjs component will mount');
    }

    componentDidMount() {
        console.log('personjs inside component did mount');
    }

    render() {
        console.log('personjs inside render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
            </div>);
    }
}

export default Person;