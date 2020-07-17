import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
                {/* <LoginComponent/>
             <WelcomeComponent/>*/}
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return(
        <>
        <h1>Welcome!</h1>
        <div className="container">
        Welcome {this.props.match.params.name}
        </div>
        </>
       
    )
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
        return (
        
        <div>
            <h1>List Todos</h1>
            <div className="container">
            <table className="table">
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
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid creadentails</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}

                { /*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>*/}
                { /* <IsLoginSuccessful showSuccessMessage={this.state.showSuccessMessage}/>*/}
           User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
           Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.onLoginClicked}>Login</button>
            </div>
            </div>

        )
    }


}


class LogoutComponent extends Component{
    render(){
        return(
            <div>
                <h1>you are logged out</h1>
                <div className="container">
                    Thank you for using our Application.
                </div>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (<header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="https://twitter.com/roshan_aaarke" className="navbar-brand">Learn with Aaarke</a></div>
                <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link>Home</li>
                    <li><Link className="nav-link" to="/todos">Todos</Link>Todos</li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li><Link className="nav-link" to="/login">Login</Link>Login</li>
                    <li><Link className="nav-link" to="/logout">Logout</Link>Logout</li>

                </ul>
            </nav>
        </header>)
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All right reserved 2020 @Aaarke</span>
            </footer>
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