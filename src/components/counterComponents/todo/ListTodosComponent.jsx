import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent.jsx'
import TodoDataService from '../../../api/todo/TodoDataService'


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        console.log("in the constructor")
        this.state = {
            todos: [],
            message: ''
        }
        this.onDeletdClicked = this.onDeletdClicked.bind(this)
        this.refreshTodoPage = this.refreshTodoPage.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }


    componentDidMount() {
        console.log("in the componentDidMount")
        this.refreshTodoPage()
    }

    refreshTodoPage() {
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retriveAllTodos(username)
            .then(response => {
                console.log(response)
                this.setState({ todos: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        console.log("in the render method")
        return (

            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>isCompleted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr>
                                        <td>{todo.description}</td>
                                        <td>{new Intl.DateTimeFormat("en-GB", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        }).format(new Date(todo.targetDate))}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="bnt btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                        <td><button className="bnt btn-warning" onClick={() => this.onDeletdClicked(todo.id)}>Delete</button></td>


                                    </tr>
                                )

                            }
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }

    onDeletdClicked(id) {
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.deleteTodo(username, id).then(response => {
            this.setState({ message: `Delete of todo ${id} is successful` })
            this.refreshTodoPage()
        }).catch(error => {

        })
    }

    updateTodo(id) {
        this.props.history.push(`/todos/${id}`)

    }


}

export default ListTodosComponent