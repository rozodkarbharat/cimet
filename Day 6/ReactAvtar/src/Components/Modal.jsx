import React from 'react'
import "../Css/Modal.css"
const Modal = ({handleModal, handleAddUser, name, handleName}) => {
  return (
    <div className="modal">
              <p className="modal-heading">New User
                <span onClick={handleModal} className="cut-close">X</span>
              </p>
              <div className="input-container">
                <span>Enter Name</span>
                <input autoFocus className="name-input" value={name} onChange={(e)=>handleName(e)} type="text" placeholder="Enter Name" />
              </div>
              <div className="modal-btns">
                <button onClick={handleModal} className="cancel-btn">Cancel</button><button onClick={handleAddUser} className="confirm-btn">Confirm</button>
              </div>
            </div>
  )
}

export default Modal