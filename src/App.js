import React from 'react';
import './App.css';
import './components/counterComponents/Counter'
import Counter from './components/counterComponents/Counter';

function App() {
  return (
    <div className="App">
     <Counter by={1}></Counter>
     <Counter by={5}></Counter>
     <Counter by={10}></Counter>
    </div>
    
  );
}




export default App;
