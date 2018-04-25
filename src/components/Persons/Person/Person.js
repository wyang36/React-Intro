import React, { Component } from 'react';
import PropType from 'prop-types'

import classes from './Person.css';

import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('personjs inside construction', props);
        this.inputElement = React.createRef();
        //this.state = {};
    }

    componentWillMount() {
        console.log('personjs component will mount');
    }

    componentDidMount() {
        console.log('personjs inside component did mount');
        if (this.props.position === 0)
            this.inputElement.current.focus();
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('personjs inside render');
        return (
            <div className={classes.Person}>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    value={this.props.name}
                    onChange={this.props.changed} />
            </div>);
    }
}

Person.propTypes = {
    click: PropType.func,
    name: PropType.string,
    age: PropType.number,
    changed: PropType.func
}

export default Person;