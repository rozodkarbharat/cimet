
interface TodoObject{
    id: number;
    name: string;
    status: boolean;
  }

interface todoArray{
    todos: TodoObject[];
    toggleTodoStatus: (id:number)=> void;
    handleDelete: (id:number)=> void;
}

const Todos = ({todos, toggleTodoStatus, handleDelete}:todoArray) => {
  return (
    <div>
        {todos.map((todo:TodoObject) =>{
            return <div style={{display:"flex", gap:'15px',marginTop:"30px"}}>
                <p style={todo.status?{textDecoration:"line-through"}:{}}>{todo.name}</p>
                {todo.status?<button onClick={()=>toggleTodoStatus(todo.id)}>Mark Complete</button>:
                <button onClick={()=>toggleTodoStatus(todo.id)}>Mark Incomplete</button>}
                <button onClick={()=>handleDelete(todo.id)}>DELETE</button>
            </div> 
        })}
    </div>
  )
}

export default Todos