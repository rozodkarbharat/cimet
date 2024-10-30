let currentQuestion = -1
let selectedQuestions = []
let answer = ""
let correctAnswerCount = 0
let AllQuestions = []
let isOptionSelected = false
let countdownNumber = 4
let randomArray =[]
let randomArrayIndex = 0

const box = document.getElementById("quiz")
let questionContent = document.querySelector("#question")
let scoreboard = document.getElementById('score-board')
let optionsContainer = document.querySelector("#options-container")
let optinNodes = document.querySelectorAll("#options-container p")
let getReadtMessage = document.getElementById("get-ready-messsage")
let countdown = document.getElementById('countdown')

// this will get data from json file 
async function GetData() {
    return new Promise(async (resolve, reject) => {
        try {
            let fetchapi = await fetch('./data.json')
            let responsedata = await fetchapi.json()
            resolve(responsedata)
        }
        catch (err) {
            console.log("Something went wrong")
            resolve([])
        }
    })
}
let timerCoundDown = ""

// countdownfor 
function startCountDown() {
    countdown.innerText = 4
    timerCoundDown = setInterval(() => {
        countdown.innerText = countdownNumber--
    }, 1000);
}
// this will append question on ui
async function CreatePage(questionNumber, Questions) {
    console.log(questionNumber, 'questionnumber')
    isOptionSelected = false
    questionContent.innerText = Questions[questionNumber].title
    answer = Questions[questionNumber].answer
    Questions[questionNumber].options= shuffle(Questions[questionNumber].options)
    // console.log(shuffle(Questions[questionNumber].options),'shuffled options')
    getReadtMessage.style.display = "none"
    Questions[questionNumber].options.map((elem, index) => {
        document.getElementById(`option${index + 1}`).innerText = elem
        document.getElementById(`option${index + 1}`).style.backgroundColor = '#4681f4'
        document.getElementById(`option${index + 1}`).style.display = "block"
        document.getElementById(`option${index + 1}`).style.cursor = 'pointer'
    })
}

// This will change question after 5 seconds
let QuestionsInterval = ""

// this will hide question and show score
function ShowScore() {
    AllQuestions[currentQuestion-1].options.map((elem, index) => {
        optinNodes[index].style.display = "none"
    })
    optionsContainer.style.display = 'none'
    questionContent.style.display = "none"
    scoreboard.innerText = 'Your score is ' + correctAnswerCount + '/' + AllQuestions.length
}


// code starts here 
async function Main() {
    startCountDown()
    let Questions = await GetData()
    Questions = shuffle(Questions)
    AllQuestions = Questions
    QuestionsInterval = setInterval(async () => {
        if (timerCoundDown) {
            clearInterval(timerCoundDown)
            countdownNumber = 4
        }

        startCountDown()
        let questionNumber = ++currentQuestion

        
        if (selectedQuestions.length >= Questions.length) {
            clearInterval(QuestionsInterval)
            countdown.style.display = 'none'
            ShowScore()
        }
        else if (!selectedQuestions.includes(questionNumber)) {
            CreatePage(questionNumber, Questions)
            currentQuestion = questionNumber
            selectedQuestions.push(questionNumber)
        }
        console.log(selectedQuestions.length >= Questions.length, Questions.length, selectedQuestions, 'selectedquestion')


    }, 5000);
}
// this will handle option selection click event
optionsContainer.addEventListener("click", (e) => {
    if (!isOptionSelected) {
        isOptionSelected = true
        for (var a = 0; a < optinNodes.length; a++) {
            if (optinNodes[a].innerText == e.target.innerText) {
                optinNodes[a].style.backgroundColor = '#5dbea3'
            }
            else {
                optinNodes[a].style.cursor = 'not-allowed'
            }
        }
        if (e.target.innerText == answer) {
            correctAnswerCount++
        }
    }
})

Main()



function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
}

