import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class ErrorComponent extends Component {
    render() {
        return <div>An error occured</div>
    }
}

export default ErrorComponent