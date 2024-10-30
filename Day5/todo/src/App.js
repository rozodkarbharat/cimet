import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import CreateTodo from './Components/CreateTodo';
import Edit from './Components/Edit';


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [id, setId] = useState("")

  function createTodo(todo) {
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
    setTodos(() => [...todos, todo])
  }

  function toggleTodoStatus(id) {
    let toggledData = todos.map((elem) => {
      if (elem.id == id) {
        return { ...elem, status: elem.status == "complete" ? "pending" : "complete" }
      }
      return elem
    })
    localStorage.setItem('todos', JSON.stringify([...toggledData]))
    setTodos(() => toggledData)
  }

  function EditToddo(todo) {
    let newTodos = todos.map((elem) => {
      if (elem.id == todo.id) {
        return todo
      }
      return elem
    })
    setTodos(() => newTodos)
    localStorage.setItem('todos', JSON.stringify([...newTodos]))
    setId(() => "")
  }

  function DeleteTodo(id) {
    let newdata = todos.filter((elem) => {
      return elem.id != id
    })
    localStorage.setItem('todos', JSON.stringify([...newdata]))
    setTodos(() => newdata)
  }

  function closeModal() {
    setId(() => "")
  }

  

  return (
    <div className="App">
      <CreateTodo createTodo={createTodo} />
      <div >
        <table className='all-todos'>

          <thead>
            <tr className='table-row'>
              <th>Todo</th>
              <th>Status</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>

            {
              todos.length > 0 && todos.map((elem) => {
                return <tr className='table-row' key={elem.id}>
                  <td>
                    <input checked={elem.status=="complete"||false} onChange={() => toggleTodoStatus(elem.id)}  type='checkbox' />
                    </td>
                  <td>{elem.todo}</td>
                  <td>{elem.status}</td>
                  <td className='btn-container'>
                    {/* {elem.status == "complete" ? <button className='toggle-status-btn' onClick={() => toggleTodoStatus(elem.id)}>
                      mark as pending
                    </button> :
                      <button className='toggle-status-btn' onClick={() => toggleTodoStatus(elem.id)}>
                        mark as complete
                      </button>
                    } */}
                    <i onClick={() => DeleteTodo(elem.id)} className="fa-solid fa-trash trash"></i>

                    {/* <button onClick={()=>setId(elem.id)}>Edit</button> */}
                    {
                      elem.status =="pending" && <i onClick={() => setId(elem.id)} className="fa-solid fa-pen pen"></i>
                    }
                    
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      {id && <Edit closeModal={closeModal} todos={todos} EditToddo={EditToddo} id={id} />}
    </div>
  );
}

export default App;
