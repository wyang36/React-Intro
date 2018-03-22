import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessages: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessages: error });
    }

    render() {

        if (this.state.hasError) {
            return <h1>{this.state.errorMessages}</h1>;
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;