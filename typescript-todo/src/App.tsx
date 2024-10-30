import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Todos from './components/Todos';

interface TodoObject{
  id: number;
  name: string;
  status: boolean;
}

function App() {
  const [todoInput, setTodoInput] = useState<string>("")
  let [todos,setTodos] = useState<TodoObject[]>([])

  function handleSubmit(e:React.SyntheticEvent<HTMLFormElement>){
      e.preventDefault()
      if (todoInput.length == 0) return 
      let id = Date.now()
      setTodos([...todos,{id:id,name:todoInput,status:false}])
      setTodoInput("")
  } 

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement> ){
    let target = e.target.value 
    setTodoInput(target)
  }

  function toggleTodoStatus(id: number){
    let tempTodos =todos.map((todo: TodoObject) => todo.id === id? {...todo,status:!todo.status}:todo)
    setTodos(tempTodos)
  }

  function handleDelete(id: number){
    let tempTodos = todos.filter((todo: TodoObject) => todo.id!==id)
    setTodos(tempTodos)
  }

  return (
    <>  
      <Form handleChangeInput={handleChangeInput} handleSubmit={handleSubmit} todoInput={todoInput}  />
      <Todos toggleTodoStatus={toggleTodoStatus} todos={todos} handleDelete={handleDelete} />
    </>
  )
}

export default App
