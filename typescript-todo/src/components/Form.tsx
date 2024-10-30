import React from 'react'

interface FormData{
    handleSubmit: (e:React.SyntheticEvent<HTMLFormElement>)=> void;
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    todoInput:string;
    
}

const Form = ({handleSubmit, handleChangeInput, todoInput}:FormData) => {
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex'>
            <input value={todoInput} onChange={handleChangeInput} type="text" />
            <button  type='submit' >Add</button>
        </form>
    </div>
  )
}

export default Form