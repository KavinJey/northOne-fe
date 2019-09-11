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
        <TodoList />
        <Prompt /> 
      </header>
    </div>
  );
}

export default App;
