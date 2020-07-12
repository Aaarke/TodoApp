import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component{

  constructor(){
    super()
    this.state={count:0}
    this.increament=this.increament.bind(this)
    this.decrement=this.decrement.bind(this)
}

increament(by){
  this.setState(
    (prevState)=>{return{count:prevState.count+by}})
}
decrement(by){
  this.setState(
    (prevState)=>{return{count:prevState.count-by}})
}
  render(){
    return (
      <div className="Counter">
       <CounterButton by={1} increamentMethod={this.increament} decrementMethod={this.decrement}></CounterButton>
       <CounterButton by={5} increamentMethod={this.increament} decrementMethod={this.decrement}></CounterButton>
       <CounterButton by={10}increamentMethod={this.increament} decrementMethod={this.decrement}></CounterButton>
       <div className=><button>Reset</button></div>

       <span className="count">{this.state.count}</span>
      </div>
      
    );
  }
} 
class CounterButton extends Component {
    constructor(){
        super()
        this.state={count:0}
        this.increament=this.increament.bind(this)
        this.decrement=this.decrement.bind(this)

    }
    render(){
    return (
      <div className="counterComponent">
       <button onClick={this.increament}>+{this.props.by}</button>
       <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    )}

     increament(){
        this.setState({count:this.state.count+this.props.by})
        this.props.increamentMethod(this.props.by);
    }

    decrement(){
      this.setState({count:this.state.count-this.props.by})
      this.props.decrementMethod(this.props.by);
  }
  }

  

  export default Counter