import React from 'react';
import './App.css';
import './bootstrap.css';
import './components/counterComponents/Counter'
import Counter from './components/counterComponents/Counter'
import TodoApp from './components/counterComponents/todo/TodoApp'
import LoginComponent from './components/counterComponents/todo/TodoApp'

function App() {
  return (
    <div className="App">
     {/*<Counter/>*/}
     <TodoApp/>
    
    </div>
    
  );
}




export default App;
