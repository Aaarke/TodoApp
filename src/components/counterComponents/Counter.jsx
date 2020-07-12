import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component{

  constructor(){
    super()
    this.state={count:0}
    this.increament=this.increament.bind(this)
}

increament(by){
  console.log(`increment from parent- ${by}`)
  // this.setState({count:this.state.count+this.props.by})
}
  render(){
    return (
      <div className="Counter">
       <CounterButton by={1} increamentMethod={this.increament}></CounterButton>
       <CounterButton by={5} increamentMethod={this.increament}></CounterButton>
       <CounterButton by={10}increamentMethod={this.increament}></CounterButton>
      </div>
      
    );
  }
} 
class CounterButton extends Component {
    constructor(){
        super()
        this.state={count:0}
        this.increament=this.increament.bind(this)
    }
    render(){
    return (
      <div className="counterComponent">
       <button onClick={this.increament}>+{this.props.by}</button>
    <span className="count">{this.state.count}</span>
      </div>
    )}

     increament(){
        this.setState({count:this.state.count+this.props.by})
        this.props.increamentMethod(this.props.by);
    }
  }

  

  export default Counter