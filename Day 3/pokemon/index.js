
let AllPokemonData = []
let FilteredData =[]
let timer =""


let loadMoreBtn = document.getElementById('load-more')
let Grid = document.getElementById('grid')
let SelectType = document.getElementById("select-type")
let searchInput = document.getElementById('search')

// this wil fetch 20 data at from api 
async function getTwentyData() {
    let apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${AllPokemonData.length}`)
    console.log(apiResp);
    let TwentyData = await apiResp.json()

    let Promises = TwentyData.results.map((elem) => {
        return fetch(elem.url)
    })

    let twentyApiRes = await Promise.all(Promises)
    let pokemonData = twentyApiRes.map(async(elem)=>{
        return await elem.json()
    })

    AllPokemonData.push(... await Promise.all(pokemonData));
    FilteredData=AllPokemonData
    DisplayData(AllPokemonData)
}

// This function will run at start 
async function Main() {
    getTwentyData()
}

// this will append single pokemon on UI 
function appendData(pokemon){
    let flipCard = document.createElement('div')
    let flipCardInner = document.createElement("div")
    let flipCardFront = document.createElement("div")
    let pokemonImg = document.createElement("img")
    let name = document.createElement("p")
    let type = document.createElement("p")
    let flipCardBack = document.createElement("div")
    let height = document.createElement("p")
    let weight = document.createElement("p")
    let hp = document.createElement("p")
    let attack = document.createElement("p")
    let defence = document.createElement("p")
    let specialAttack = document.createElement("p")
    let specialDefence = document.createElement("p")


    flipCard.setAttribute("class","flip-card")
    flipCardInner.setAttribute("class","flip-card-inner")
    flipCardFront.setAttribute("class","flip-card-front")
    flipCardBack.setAttribute("class","flip-card-back")
    pokemonImg.setAttribute("class","img")


    pokemonImg.src = pokemon.img
    name.innerText = pokemon.name
    type.innerHTML = `<b>Type:</b> ${pokemon.type}`
    attack.innerText = "attack: "+pokemon.attack
    weight.innerText = "weight: "+pokemon.weight
    height.innerText = "height: "+pokemon.height
    hp.innerText = "hp: "+pokemon.hp

    flipCardFront.append(pokemonImg,name,type)
    flipCardBack.append(height,weight,hp,attack)
    flipCardInner.append(flipCardFront,flipCardBack)
    flipCard.append(flipCardInner)
    Grid.append(flipCard)
}

// this will handle display data
function DisplayData(filteredData) {
    Grid.innerHTML=""
    filteredData.map((elem)=>{
        let singlePockemon ={
            name:elem.name,
            img:elem.sprites.other.dream_world.front_default?elem.sprites.other.dream_world.front_default:"No Image",
            type:elem.types[0].type.name,
            hp:elem.stats[0].base_stat,
            attack:elem.abilities[0].ability.name,
            weight: elem.weight,
            height: elem.height
        }
        appendData(singlePockemon)
    })
}

//  this will filter with type
function handleFilterData(filter){
    searchInput.value=""
    if(filter=="All"){
        FilteredData = AllPokemonData
    }
    else{
        FilteredData = AllPokemonData.filter((elem)=> elem.types[0].type.name==filter)
    }
    DisplayData(FilteredData)
}

// this will search in filtered data
function handleSearch(key){
    newdata = FilteredData.filter((elem)=>{
        if(elem.name.toLowerCase().includes(key.toLowerCase())){
            return true
        }
        return false
    }) 
    DisplayData(newdata)
}


// To handle search input 
searchInput.addEventListener('input',(e)=>{
    if(timer){
        clearTimeout(timer)
    }
    timer = setTimeout(() => {   
        handleSearch(e.target.value)
    }, 800);
})

// to handle Filter select 
SelectType.addEventListener('change',(e)=>{
    handleFilterData(e.target.value)
})

// to handle load more 
loadMoreBtn.addEventListener('click', (e) => {
    getTwentyData()

})

Main()