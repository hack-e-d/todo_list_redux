import React from 'react';
import './App.css';
import Input from './app/components/Input';
import TodoIO from './app/components/TtodoIO';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';


function App() {

  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <div className='app-container'>
        <div className='todo-container'>
          {
            todoList.map(item =>(
              <TodoIO name = {item.item} done={item.done} id={item.id}/>
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
