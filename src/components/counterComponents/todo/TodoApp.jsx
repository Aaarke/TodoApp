import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
                {/* <LoginComponent/>
             <WelcomeComponent/>*/}
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name}</div>
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: 'Learn React' },
                { id: 2, description: 'Learn Android' },
                { id: 3, description: 'Create Tutorial' },
                { id: 4, description: 'Play Counter-Strike' }




            ]
        }
    }
    render() {
        return (<div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(todo =>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
        )
    }
}

class ErrorComponent extends Component {
    render() {
        return <div>An error occured</div>
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onLoginClicked = this.onLoginClicked.bind(this)
    }
    handleChange(event) {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    onLoginClicked() {
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            //{/welcome}
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        } else {
            console.log('Invalid Credential')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }

    }





    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div>Invalid creadentails</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}

                { /*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>*/}
                { /* <IsLoginSuccessful showSuccessMessage={this.state.showSuccessMessage}/>*/}
           User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
           Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.onLoginClicked}>Login</button>
            </div>

        )
    }


}

function ShowInvalidCredential(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid creadentails</div>
    }
    return null

}
function IsLoginSuccessful(props) {
    if (props.showSuccessMessage) {
        return <div>Successful Login</div>

    }
    return null

}
export default TodoApp