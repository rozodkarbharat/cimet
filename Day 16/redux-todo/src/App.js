import logo from './logo.svg';
import './App.css';
import { addTodo, clickUpdate, deleteTodo, inputTodo, selectTodo, toggleTodo, updateTodo } from './slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";




function App() {
  const { input, todos, isToUpdate } = useSelector(selectTodo)
  const dispatch = useDispatch()

  console.log(input, todos, 'input')

  function handleSubmit(e) {
    e.preventDefault()
    if (input.length == 0) return
    if (isToUpdate) {
      dispatch(updateTodo())
    }
    else {

      dispatch(addTodo())
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="flex justify-center gap-10 pt-10">
        <input onKeyDown={handleKeyDown} value={input} onChange={(e) => dispatch(inputTodo(e.target.value))} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="todo here" />
        <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2">{isToUpdate ? "Update Todo" : "Add Todo"}</button>

      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-auto w-[100%] bg-red mt-10 pb-10">
        {
          todos.length > 0 && <table className=" text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 w-[50%] m-auto">
            <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((todo,index) => {
                  return <tr className={`border-blue-40 ${index%2==0?"bg-blue-500":"bg-blue-600"}`}>
                    <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                      {!(isToUpdate == todo.id) && <input type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))} checked={todo.isCompleted} className='h-5 w-5 cursor-pointer' />}
                    </th>
                    <td className="px-6 py-4">
                      <span className='text-lg' style={todo.isCompleted ? { textDecoration: "line-through" } : {}}>{todo.title}</span>
                    </td>
                    <td className="px-6 py-4">
                      {!todo.isCompleted && <FaPenToSquare className='h-5 w-5 cursor-pointer' onClick={() => dispatch(clickUpdate(todo.id))} />}
                    </td>
                    <td className="px-6 py-4">
                      {!(isToUpdate == todo.id) && <FaTrash className='h-5 w-5 cursor-pointer' onClick={() => dispatch(deleteTodo(todo.id))} >Delete</FaTrash>}
                    </td>
                  </tr>
                })
              }

            </tbody>
          </table>}
      </div>

    </div>
  );
}

export default App;
