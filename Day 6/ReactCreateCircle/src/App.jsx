import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [circles, setcircles] = useState([])
  const [deletedCircls, setdeletedCircles] = useState([])

  function handleClick(e) {
    var backgroundColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    setcircles(() => [...circles, { x: e.clientX, y: e.clientY, id: Date.now(),backgroundColor }])
  }

  function handleUndo() {
    let circle = circles.pop()

    if (circles.length == 0) {
      setcircles(() => [])
      setdeletedCircles(() => [])
    }
    else {

      setcircles(circles)
      setdeletedCircles(() => [...deletedCircls, circle])
    }
  }

  function handleRedo() {
    let circle = deletedCircls.pop()
    setcircles(() => [...circles, circle])
    setdeletedCircles(() => deletedCircls)
  }

  function handlereset() {
    setcircles(() => [])
    setdeletedCircles(() => [])
  }

  return (
    <div className="main">
      <div className="buttons">
        <button onClick={handlereset} disabled={circles.length == 0} className="reset">RESET</button>
        <button onClick={handleUndo} disabled={circles.length == 0} className="undo">UNDO</button>
        <button onClick={handleRedo} disabled={deletedCircls.length == 0} className="redo">REDO</button>
      </div>
      <div className="canvas" onClick={handleClick} >
        {
          circles.map((circle,index) => {           
            return <div style={{ left: circle.x-10, top: circle.y-10, backgroundColor:circle.backgroundColor }} className='dot'></div>
          })
        }
      </div>
    </div>
  )
}

export default App
