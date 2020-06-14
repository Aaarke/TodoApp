import React, { Component } from 'react';
import './Counter.css'


class Counter extends Component {
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
    }
  }

  

  export default Counter