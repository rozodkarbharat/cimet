

let createUserBtn = document.getElementById("add-btn")
let modal = document.getElementById("modal")
let cutCloseModal = document.getElementById("cut-close")
let cancelAddUserBtn = document.querySelector(".cancel-btn")
let nameInput = document.getElementById("name-input")
let confirmAddUser = document.querySelector(".confirm-btn")
let profileContainer = document.getElementById("profile-container")
let UsersElements = document.querySelectorAll(".delete-user")


let Users = []
let Name = ""

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

confirmAddUser.addEventListener("click", () => {
    let id = Date.now()
    Users.push({ Name, id })
    Name = ""
    nameInput.value = ""
    modal.style.display = "none"
    showUsers()
})


function showUsers() {
    profileContainer.innerHTML = ""
    colorArray = shuffleArray(colorArray)
    Users.map((elem, index) => {
        if(index>=colorArray.length-1 && colorArray.length-1 %index ){
            console.log("shuffled gain")
            colorArray = shuffleArray(colorArray)
        }
        let color = colorArray[index % colorArray.length]
        let box = document.createElement("div")
        box.setAttribute("class", "user")
        box.style.backgroundColor = color.backgroundColor
        box.style.color = color.color
        box.innerText = elem.Name[0].toUpperCase()
        let deleteUserBtn = document.createElement("button")
        deleteUserBtn.setAttribute("class", "delete-user")
        deleteUserBtn.innerText = "x"
        deleteUserBtn.id = elem.id
        box.append(deleteUserBtn)
        profileContainer.append(box)
    })
    UsersElements = document.querySelectorAll(".delete-user")
    Array.from(UsersElements).map((el) => {
        el.addEventListener("click", (node) => {
            Users = Users.filter((user) => {
                return user.id != node.target.id
            })
            showUsers()
        })
    })
}


nameInput.addEventListener("input", (e) => {
    Name = e.target.value
})

cancelAddUserBtn.addEventListener("click", () => {
    modal.style.display = "none"
    nameInput.value= ""
    Name = ""   
})

cutCloseModal.addEventListener("click", () => {
    modal.style.display = "none"
    nameInput.value= ""
    Name = ""
})


createUserBtn.addEventListener("click", () => {
    modal.style.display = "block"
    nameInput.focus()
})

createUserBtn.addEventListener('keydown',(e)=>{
    console.log(e,'keypress')
})