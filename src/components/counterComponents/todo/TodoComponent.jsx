import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {
        let userName = AuthenticationService.getLoggedInUser()
        TodoDataService.getTodo(userName, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))

    }

    onSubmit(values) {
        console.log(values)
        let userName = AuthenticationService.getLoggedInUser()
        let todo={
            id: this.state.id,
            description:values.description,
            targetDate:values.targetDate
        }
        if(this.state.id==-1){
            TodoDataService.createTodo(userName, todo)
        }else{
            TodoDataService.updateTodo(userName, this.state.id, todo).then(() =>
                this.props.history.push('/todos'))
        }
      
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Description should be atleast 5 character length'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Please enter valid date'
        }
        return errors;

    }

    render() {
        let description = this.state.description
        let targetDate = this.state.targetDate
        return <div>
            <h1>Todo</h1>
            <div className="Container">
                <Formik
                    initialValues={{ description, targetDate }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>

                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    }
}

export default TodoComponent