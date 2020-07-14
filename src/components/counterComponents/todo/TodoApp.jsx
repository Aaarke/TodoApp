import React, { Component } from 'react';

class TodoApp extends Component{
  render(){
      return(
          <div className="TodoApp">
             <LoginComponent/>
          </div>
      )
  }
}

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username: 'in28minutes',
            password: ''
        }
    // this.handleUsernameChange=this.handleUsernameChange.bind(this)
    // this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.onLoginClicked=this.onLoginClicked.bind(this)
    }
    handleChange(event){
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }

    onLoginClicked(){
        console.log(this.state)
        if(this.state.username==='in28minutes'&&this.state.password==='dummy'){
            console.log('Login Successful')

        }else{
            console.log('Invalid Credential')
        }

    }



    

    render(){
        return(
            
            <div>
                <div>Invalid creadentails</div>
            <div>Successful Login</div>
           User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
           Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
           <button onClick={this.onLoginClicked}>Login</button>
           </div>
        )
    }
}

export default TodoApp