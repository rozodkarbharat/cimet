var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let AllPokemonData = [];
let FilteredData = [];
let timer = "";
const loadMoreBtn = document.getElementById('load-more');
const Grid = document.getElementById('grid');
const SelectType = document.getElementById("select-type");
const searchInput = document.getElementById('search');
// This will fetch 20 data from the API
function getTwentyData() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiResp = yield fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${AllPokemonData.length}`);
        console.log(apiResp);
        const TwentyData = yield apiResp.json();
        const Promises = TwentyData.results.map((elem) => fetch(elem.url));
        const twentyApiRes = yield Promise.all(Promises);
        const pokemonData = yield Promise.all(twentyApiRes.map((elem) => __awaiter(this, void 0, void 0, function* () { return yield elem.json(); })));
        AllPokemonData.push(...pokemonData);
        FilteredData = AllPokemonData;
        DisplayData(AllPokemonData);
    });
}
// This function will run at start
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getTwentyData();
    });
}
// This will append a single Pokémon to the UI
function appendData(pokemon) {
    const flipCard = document.createElement('div');
    const flipCardInner = document.createElement("div");
    const flipCardFront = document.createElement("div");
    const pokemonImg = document.createElement("img");
    const name = document.createElement("p");
    const type = document.createElement("p");
    const flipCardBack = document.createElement("div");
    const height = document.createElement("p");
    const weight = document.createElement("p");
    const hp = document.createElement("p");
    const attack = document.createElement("p");
    flipCard.setAttribute("class", "flip-card");
    flipCardInner.setAttribute("class", "flip-card-inner");
    flipCardFront.setAttribute("class", "flip-card-front");
    flipCardBack.setAttribute("class", "flip-card-back");
    pokemonImg.setAttribute("class", "img");
    pokemonImg.src = pokemon.img;
    name.innerText = pokemon.name;
    type.innerHTML = `<b>Type:</b> ${pokemon.type}`;
    attack.innerText = "attack: " + pokemon.attack;
    weight.innerText = "weight: " + pokemon.weight;
    height.innerText = "height: " + pokemon.height;
    hp.innerText = "hp: " + pokemon.hp;
    flipCardFront.append(pokemonImg, name, type);
    flipCardBack.append(height, weight, hp, attack);
    flipCardInner.append(flipCardFront, flipCardBack);
    flipCard.append(flipCardInner);
    Grid.append(flipCard);
}
// This will handle displaying data
function DisplayData(filteredData) {
    Grid.innerHTML = "";
    filteredData.forEach((elem) => {
        const singlePokemon = {
            name: elem.name,
            img: elem.sprites.other.dream_world.front_default || "No Image",
            type: elem.types[0].type.name,
            hp: elem.stats[0].base_stat,
            attack: elem.abilities[0].ability.name,
            weight: elem.weight,
            height: elem.height
        };
        appendData(singlePokemon);
    });
}
// This will filter with type
function handleFilterData(filter) {
    searchInput.value = "";
    FilteredData = (filter === "All")
        ? AllPokemonData
        : AllPokemonData.filter((elem) => elem.types[0].type.name === filter);
    DisplayData(FilteredData);
}
// This will search in filtered data
function handleSearch(key) {
    const newdata = FilteredData.filter((elem) => elem.name.toLowerCase().includes(key.toLowerCase()));
    DisplayData(newdata);
}
// To handle search input
searchInput.addEventListener('input', (e) => {
    if (timer) {
        clearTimeout(Number(timer));
    }
    timer = setTimeout(() => {
        handleSearch(e.target.value);
    }, 800).toString();
});
// To handle Filter select
SelectType.addEventListener('change', (e) => {
    handleFilterData(e.target.value);
});
// To handle load more
loadMoreBtn.addEventListener('click', () => {
    getTwentyData();
});
Main();
