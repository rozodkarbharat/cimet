import logo from './logo.svg';
import './App.css'
import { useEffect, useRef, useState } from "react";
let tempdata = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

function App() {
  const [data, setData] = useState([...tempdata])
  const [flipped, setFlipped] = useState([])
  const [guesed, setGuesed] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [countDown, setCountDown] = useState(60)
  const [isQuiz, setCisQuiz] = useState(false)
  const [Boxes, setBoxes] = useState(4)
  

  let timeref = useRef()

  function handleClick(elem, index) {
    setClickCount((prev) => prev + 1)
    if (!guesed.includes(elem)) {
      if (!flipped.includes(index) && flipped.length < 2) {

        if (data[flipped[0]] == elem) {
          setGuesed((prev) => [...prev, elem])
          setFlipped([])
        }
        else {
          setFlipped((prev) => [...prev, index])
        }
      }
      else if (!flipped.includes(index) && flipped.length == 2) {
        setFlipped([index])
      }
    }
    console.log(flipped, 'flipped')
  }

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }

  function handleStart() {
   
    if(!(Boxes%2==0)){
      alert("number should be even")
      return
    }

    let numbersArray = Array.from({length: Boxes}, (_, index) => index + 1);
    let randomisedArray = shuffle([...numbersArray,...numbersArray])

    setData(randomisedArray)
    setClickCount(0)
    setFlipped([])
    setGuesed([])
    timeref.current = setInterval(() => {
      setCountDown((prev) => prev - 1)
      setCisQuiz(true)
    }, 1000)
  }

  useEffect(() => {
    if (countDown == 0) {
      clearInterval(timeref.current)
      setCisQuiz(false)
      setCountDown(60)
    }
  }, [countDown])

  return (
    <div className="App">
      {isQuiz && <h1>{countDown}</h1>}
      <p>Clicks {clickCount}</p>
      {!isQuiz && <h2>Score: {guesed.length}</h2>}
      {isQuiz && <div className='grid'>

        {
          data.map((elem, index) => {
            let backside = guesed.includes(elem) || flipped.includes(index)
            return <div key={index} onClick={() => handleClick(elem, index)} className="flip-box">
              <div className="flip-box-inner ">
                <div className={backside ? "flip-box-back" : "flip-box-front"}>
                  <img src="https://img.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg?w=826&t=st=1727773450~exp=1727774050~hmac=9ba4ecfe46cdea4d7bdca78168eecc46d29040fc9ea2b32d230fccda816271b6" alt="Paris" style={{ width: "300px", height: "200px" }} />
                </div>
                <div className={!backside ? "flip-box-back" : "flip-box-front"}>
                  <h1>{elem}</h1>
                </div>
              </div>
            </div>
          })
        }
      </div>}

      {!isQuiz && <div>
        <input onChange={(e)=>setBoxes(e.target.value)} value ={Boxes} type='number' placeholder='type an even number here' />
        <button onClick={handleStart}>
          Start
        </button>
      </div>}
    </div>
  );
}

export default App;
