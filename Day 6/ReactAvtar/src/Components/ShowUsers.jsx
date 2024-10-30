import React from 'react'
import "../Css/ShowUsers.css"


const ShowUsers = ({users, deleteUser}) => {
  return (
    <div className="profile-container">
            {users.length>0 && users.map((elem,index)=>{  
              let {color,backgroundColor,name,id} = elem
              return <div style={{backgroundColor,color}} className="user" key= {id}>{name && name[0].toUpperCase()}
              <span onClick={()=>deleteUser(elem.id)} className="delete-user">X</span></div>
            })}
          </div> 
  )
}

export default ShowUsers