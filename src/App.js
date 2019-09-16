import React from 'react';
import logo from './logo.svg';
import './App.css';
import Prompt from './components/Prompt/prompt.js';
import TodoItem from './components/TodoItem/todoitem.js';
import TodoList from './components/TodoList/todolist.js';

function App() {
  return (
   
     
    <div className="App">
      <header className="App-header">
        <h1> Todo List</h1>
        
        <TodoList />
        <Prompt /> 
        <small class="instruction-text"> Use the buttton above to add tasks.</small>
      </header>
    </div>
  );
}

export default App;
