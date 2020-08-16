import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HelloWorldService from '../../../api/todo/HelloWorldService'


class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulMessage = this.handleSuccessfulMessage.bind(this)
        this.state={
            welcomeMessage:''
        }
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    you can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here to get customized welcome message.
                <span> </span>
                    <span>   </span>
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>

                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>

        )
    }
    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService().then(response =>
            this.handleSuccessfulMessage(response)
        )
    }

    handleSuccessfulMessage(response) {
        this.setState({ welcomeMessage: response.data })

    }
}

export default WelcomeComponent