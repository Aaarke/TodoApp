import React, { Component } from 'react';

class TodoApp extends Component{
  render(){
      return(
          <div className="TodoApp">
             <LoginComponent/>
             <WelcomeComponent/>
          </div>
      )
  }
}

class WelcomeComponent extends Component{
    render(){
        return <div>Welcome in28minutes</div>
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username: 'in28minutes',
            password: '',
            hasLoginFailed:false,
            showSuccessMessage:false
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
        if(this.state.username==='in28minutes'&&this.state.password==='dummy'){
            console.log('Login Successful')
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }else{
            console.log('Invalid Credential')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }

    }



    

    render(){
        return(
        <div>
            {this.state.hasLoginFailed &&<div>Invalid creadentails</div>}
            {this.state.showSuccessMessage &&<div>Login Successful</div>}

           { /*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>*/}
           { /* <IsLoginSuccessful showSuccessMessage={this.state.showSuccessMessage}/>*/}
           User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
           Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
           <button onClick={this.onLoginClicked}>Login</button>
        </div>
           
        )
    }

    
}

function ShowInvalidCredential(props){
    if(props.hasLoginFailed){
       return <div>Invalid creadentails</div>
    }
    return null

}
function IsLoginSuccessful(props){
    if(props.showSuccessMessage){
       return <div>Successful Login</div>

    }
    return null

}
export default TodoApp