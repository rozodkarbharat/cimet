let rightBox = document.getElementById('right')

let audio = document.createElement("audio")


let soundarr = {};

let soundsData = [
    {
        id: 1,
        image: "./assets/crash.png",
        sound: "./assets/crash.mp3",
        key: "a"
    },
    {
        id: 2,
        image: "./assets/tom.png",
        sound: "./assets/tom.mp3",
        key: "b"
    },
    {
        id: 3,
        image: "./assets/kick.png",
        sound: "./assets/kick.mp3",
        key: "c"
    },
    {
        id: 4,
        image: "./assets/snare.png",
        sound: "./assets/snare.mp3",
        key: "d"
    }
]

function CreateInstruments() {
    soundsData.map((elem) => {
        let img = document.createElement("img")
        let audio = document.createElement("audio")
        audio.src = elem.sound
        img.setAttribute("class", "instruments")
        img.src = elem.image
        rightBox.append(img)

        img.addEventListener("click", (e) => {
            audio.play()
        })

        soundarr[elem.key] = audio

    })
}


document.addEventListener("keydown", (e) => {
    if (soundarr[e.key]) {
        soundarr[e.key].play();
    }
})

CreateInstruments()