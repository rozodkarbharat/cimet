import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [age, setAge] = useState("")
  const [isEligible, setIsEligible] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isExplanation, setisExplanation] = useState(false)

  const handleSubmitAge = () => {
    
    if(!age){
      setErrorMessage("Please enter your age")
      return
    }
    setErrorMessage("")
    setisExplanation(false)
    const date = new Date(age);
    let ageInYears = Math.floor((new Date() - date) / (1000 * 60 * 60 * 24 * 365))

    if (ageInYears >= 18) {
      setIsEligible(true)
      setMessage("You are over 18, Which means you are eligible")
    }
    else {
      setIsEligible(false)
      setMessage("You are under 18, Which means you are not eligible")
    }
  }

  return (
    <div className="shadow-md p-8 w-[80%] m-auto mt-10">
      {!message && 
      <div className="text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">Find out if you are eligible to use our service!</p>
        <p className="mt-2 text-xl font-medium tracking-tight text-gray-900 sm:text-xl pb-3">What is your date of birth?</p>
        <input className='border-cyan-100 shadow-black mr-4 border border-gray-300 px-3 py-1 rounded-md cursor-pointer' type="date" value={age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={handleSubmitAge} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
        {!message && errorMessage && <p id="outlined_error_help" className="mt-2 text-md text-red-600 dark:text-red-400 text-center pb-2"><span class="font-medium">Date error!</span> Date of birth cannot be empty</p>
      }
        <p onClick={()=>setisExplanation(!isExplanation)} className="underline text-orange-400 cursor-pointer">Why do we need to know this?</p>
        </div>
      }
      
      {isExplanation && !message && <p className='border border-orange-300 p-2 w-[60%] m-auto mt-3 rounded-md'>
          Your date of birth will determine whether you can use our platform. You must be at least 18 years old to use our services.</p>
      }
      
      {message &&
        <div className='p-8 w-[600px] m-auto mt-5'>
          <p className='font-medium'>{message}</p>
          <p onClick={()=>setMessage("")} className='underline text-left mt-4 text-blue-400 cursor-pointer'>Go Back</p>
        </div>
      }
    </div>
  );
}

export default App;
