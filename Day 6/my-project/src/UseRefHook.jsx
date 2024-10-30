import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
  const [count, setcpunt] = useState(10)
  let myref = useRef("")

  useEffect(() => {
    if(count==0){

      
      clearInterval(myref.current)
    }
  }, [count])


  const startCounter = () => {
    // Prevent multiple timers from being set
    if (myref.current) return;

    myref.current = setInterval(() => {
      setcpunt((prevTime) => prevTime - 1);
    }, 1000);
  };
  function stopCounter() {
    clearInterval(myref.current)
  }
  return (
    <div className='flex-row gap-5'>
      {count}
      {/* <input className='w-96 border-solid border-2 border-indigo-600' type="number" value={count} onChange={(e) => setcpunt(e.target.value)} placeholder='Number here' /> */}
      <button className='w-120 border-solid border-2 border-indigo-600' onClick={startCounter}>Start</button>
      <button className='w-100 border-solid border-2 border-indigo-600' onClick={stopCounter} >Stop</button>
    </div>
  )
}

export default UseRefHook