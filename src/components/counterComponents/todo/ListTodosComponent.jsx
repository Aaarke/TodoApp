import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent.jsx'

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

export default ListTodosComponent