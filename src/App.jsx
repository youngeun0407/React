import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import List from './components/List'  
import Editor from './components/Editor'


const mocData = [{
  id:0,
  isDone: false,
  content: "공부하기",
  date: new Date().getTime(),
},
{
  id:1,
  isDone: false,
  content: "빨래하삼",
  date: new Date().getTime(),
},
{
  id:2,
  isDone: false,
  content: "밥먹기",
  date: new Date().getTime(),
}];

function App() {
  const [todos,setTodos]=useState(mocData);
  const idRef = useRef(3);

  const onCreate = (content)=>{
    const newTodo = {
      id:idRef.current++,
  isDone: false,
  content: content,
  date: new Date().getTime(),
    }
    setTodos([newTodo,...todos])
  }

  const onUpdate = (targetId) => {
setTodos(todos.map((todo)=>todo.id === targetId? {...todo, isDone: !todo.isDone} : todo
));
  }

  const onDelete = (targetId)=>{
    setTodos(todos.filter((todo)=>todo.id !==targetId))
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
