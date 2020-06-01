import React, { Component } from 'react';
import './Counter.css'


class Counter extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
        this.increament=this.increament.bind(this)
    }
    render(){
    return (
      <div className="counterComponent">
       <button onClick={this.increament}>+1</button>
    <span className="count">{this.state.count}</span>
      </div>
    )}

     increament(){
        this.setState({count:this.state.count+1})
    }
  }

  

  export default Counter