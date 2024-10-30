let data =[]

let firstName=""
let lastName =""
let countryName=""
let score = 0


let firstNameInput = document.getElementById("first-name")
let lastNameInput = document.getElementById("last-name")
let countrySelect = document.getElementById('country')
let scoreInput = document.getElementById('score')
let form = document.getElementById('form')
let table = document.getElementById("table")


firstNameInput.addEventListener("change",(e)=>{
    console.log(e.target.value,'name')
    firstName= e.target.value
})
lastNameInput.addEventListener("change",(e)=>{
    lastName= e.target.value
})
countrySelect.addEventListener("change",(e)=>{
    countryName= e.target.value
})
scoreInput.addEventListener("change",(e)=>{
    score= e.target.value
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e,firstName,lastName,countryName,score,'form submmited')
    let newEntry = {firstName,lastName,countryName,score}
    data.push(newEntry)
    displayData()
    form.reset()
})


function AppendData(elem){
    let nameData = document.createElement("td")
    let countryData = document.createElement("td")
    let scoreData = document.createElement("td")
    let deleteData = document.createElement("td")    
    let incData = document.createElement("td")
    let reduceData = document.createElement("td")
    let tableRow =document.createElement("tr")
    let deleteBtn =  document.createElement("button")
    nameData.innerText=elem.firstName + " " + elem.lastName
    countryData.innerText = elem.countryName
    scoreData.innerText = elem.score
    deleteBtn.innerText = "delete"
    // deleteBtn.setAttribute("class",'deletebtn')
    incData.innerText = '5+'
    reduceData.innerText = '-5'
        console.log(deleteBtn,'deletebtn')
    deleteData.append(deleteBtn)
    tableRow.append(nameData,countryData,scoreData,deleteData,incData,reduceData)
    console.log(tableRow,table)
    table.append(tableRow)

    deleteBtn.addEventListener("click",(e)=>{
        console.log(elem,'dlete')
        data= data.filter((el)=>{
            if(elem.firstName==el.firstName && elem.lastName == el.lastName){
                return false
            }
            return true
        })
        data.sort((a,b)=>b.score-a.score)
        displayData()
    })

    incData.addEventListener("click",(e)=>{
        console.log(elem,'dlete')
        data= data.map((el)=>{
            if(elem.firstName==el.firstName && elem.lastName == el.lastName){
                return {...el,score:+el.score+5}
            }
            return el
        })
        data.sort((a,b)=>b.score-a.score)
        displayData()
    })
    reduceData.addEventListener("click",(e)=>{
        console.log(elem,'dlete')
        data= data.map((el)=>{
            if(elem.firstName==el.firstName && elem.lastName == el.lastName){
                return {...el,score:+el.score-5}
            }
            return el
        })
        data.sort((a,b)=>b.score-a.score)
        displayData()
    })

}


function displayData(){
    table.innerHTML=""
    data.forEach((elem)=>{
        AppendData(elem)
    })
}


function changeCount(){

}

function handleDeleteData(){

}

