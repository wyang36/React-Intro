import React from 'react'
import Classes from './Cockpit.css'

const cockpit = (props) => {
    const classes = [];
    if (props.persons.length <= 2)
        classes.push(Classes.red);
    if (props.persons.length <= 1)
        classes.push(Classes.bold);


    let btnClass = '';

    if (props.showPersons) {
        btnClass = Classes.red;
    }

    return (
        <div className={Classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>paragraph</p>
            <button className={btnClass} onClick={props.clicked}>Toggle person</button>
        </div>
    );
};

export default cockpit;