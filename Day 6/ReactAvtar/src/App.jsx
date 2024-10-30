import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Components/Modal'
import ShowUsers from './Components/ShowUsers'


let colorArray = [
  {
      backgroundColor: "red",
      color: "#fff"
  },
  {
      backgroundColor: "green",
      color: "#fff"
  },
  {
      backgroundColor: "blue",
      color: "yellow"
  },
  {
      backgroundColor: "navyblue",
      color: "blue"
  },
  {
      backgroundColor: "pink",
      color: "blue"
  }
  

  ,
  {
      backgroundColor: "violet",
      color: "#fff"
  },
  {
      backgroundColor: "coral",
      color: "#fff"
  },
  {
      backgroundColor: "coral",
      color: "chartreuse"
  }
]

function shuffleArray(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
  }
  return array
}

function App() {
  const [name, setname] = useState("")
  const [users, setUsers] = useState([])
  const [isModal, setIsMddal] = useState(false)

  function handleName(e){
    setname(()=>e.target.value)
  }
  

  function handleModal() {
    setname(() => " ")
    setIsMddal(() => !isModal)
  }

  function handleAddUser(){
    if(name.trim().length>0){  
      colorArray = shuffleArray(colorArray)
      let color = colorArray[0]
      let id = Date.now()
      setUsers(()=>[...users,{id,name:name.trim(),color:color.color,backgroundColor:color.backgroundColor}])
    }
    setIsMddal(()=>false)
  }

  function deleteUser(id){
      let filteredUsers = users.filter((elem)=> elem.id!=id)
      setUsers(()=>filteredUsers)
  }

  return (
    <>
      <div className="full-body">
        <div className="middle-box">
          <ShowUsers users={users} deleteUser={deleteUser} />
          <button onClick={handleModal} className="add-btn">+</button>
          {
            isModal && <Modal handleName={handleName} handleAddUser={handleAddUser} handleModal={handleModal} />
          }
        </div>
      </div>
    </>
  )
}

export default App
