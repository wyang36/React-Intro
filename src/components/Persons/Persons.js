import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('personsjs inside construction', props);
        //this.state = {};
    }

    componentWillMount() {
        console.log('personsjs component will mount');
    }

    componentDidMount() {
        console.log('personsjs inside component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('update personsjs, inside willreceiveprops', nextProps);
    }

    //shouldComponentUpdate(nextProps, nextState) {
    //    console.log('update personjs, inside shouldComponentUpdate', nextProps, nextState);
    //    //can use this to improve performance.
    //    return nextProps.persons !== this.props.persons;
    //}

    componentWillUpdate(nextProps, nextState) {
        console.log('update personsjs, inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('update personsjs, inside componentDidUpdate', this.props);
    }

    render() {
        console.log('personsjs inside render');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    position={index}
                    changed={(event) => this.props.changed(event, index)}
                />);
        });
    }

}
    

export default Persons;