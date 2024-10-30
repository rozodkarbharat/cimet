import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {UPI_HANDLES} from "./UPI_HANDLES"

// let UPI_HANDLES = ["oksbi", "okicici", 'upi', "kotak", "ybl", 'okhdfcbank', "okaxis"]

function App() {
  const [upi, setUpi] = useState("")
  const [filters, setFilters] = useState([])
  const [selectedOption, setSelectedOption] = useState(-1)
  const [isOptionsVisible, setisOptionsVisible] = useState(false)
  const [errrorMessage,seterrrorMessage] =useState("")

  function handleCheck() {
    let status = /^(?!@)(?=[a-z@]*$)(?=.*@)[a-z]+@[a-z]+$/.test(upi.trim())
    if(status){
      alert("Payment Success")
    }
    else{
      alert("upi can contain only  letters and @")
    }
  }

  function handleInputUpi(e) {
    setUpi(() => e.target.value)
    if(e.target.value.split("@")[0]){
      setisOptionsVisible(true)
    }
    else{
      console.log(e.target.value.split("@")[0]!="")
      setSelectedOption(()=>false)
    }
    let count = 0
    for (var a = 0; a < e.target.value.length; a++) {
      if (e.target.value[a] == "@") {
        count++
      }
    }

    let extension = e.target.value.split("@")[1]
    let tempUpiExtension = []

    let status = /^(?!@)(?=[a-z@]*$)(?=.*@)[a-z@]*$/.test(e.target.value)

    if (extension) {

      if(status){
        seterrrorMessage("")
        tempUpiExtension = UPI_HANDLES.filter((elem, index) => {
          if (elem.startsWith(extension) & count == 1 && status) {
            return true
          }
        })
        setFilters([...UPI_HANDLES])
      }
      else{
        seterrrorMessage("Invalid Upi")
      }
    }
    else if (count == 1) {
      console.log(status,'else')
      if(status){
        seterrrorMessage("")
        setSelectedOption(0)
        tempUpiExtension = [...UPI_HANDLES]
      }
      else{
        seterrrorMessage("Invalid Upi")
      }
    }
    setFilters(tempUpiExtension)

  }

  function handleKeyPress(e) {
    // console.log(e.keyCode,'keyCode')
    if(e.keyCode==13){
      let newUpi = upi.split("@")[0] + "@" + filters[selectedOption]
      
      setUpi(newUpi)
      setisOptionsVisible(false)
    }

    if (e.keyCode == "39") {
      let newUpi = upi.split("@")[0] + "@" + filters[selectedOption]
      // console.log(newUpi, selectedOption,"chat")
      setUpi(newUpi)
      setisOptionsVisible(false)
    }

    if (e.keyCode == "38") {  // down

      if (selectedOption > 0) {
        setSelectedOption((prev) => prev - 1)
      }
      else {
        setSelectedOption(filters.length - 1)
      }

    }

    if (e.keyCode == "40") { // up
      if (selectedOption < filters.length - 1) {
        setSelectedOption((prev) => prev + 1)
      }
      else {
        setSelectedOption(0)
      }

    }

  }

  function getRemainingExtension(){
    
  }

  return (
    <div className="App">
      <div className='flex-col'>
        <div className='input-container'>
        <input className='upi-input' value={filters[selectedOption]?upi+filters[selectedOption]: upi} onChange={""} type='text' placeholder='upi here...' />
        <input className='upi-input-front' onKeyDown={handleKeyPress} value={upi} onChange={handleInputUpi} type='text' placeholder='upi here...' />
        </div>
        {errrorMessage&& <p className='error-message' >{errrorMessage}</p>}
        {filters.length>0 && isOptionsVisible && <ul className='options-list'>
          {
            filters.map((elem, index) => {

              return <li style={selectedOption == index ? { backgroundColor: "navy", color: "#fff" } : {}} key={index}>{elem}</li>
            })
          }
        </ul>}
      </div>
      <button className='check-btn' onClick={handleCheck} >Pay</button>

    </div>
  );
}

export default App;
