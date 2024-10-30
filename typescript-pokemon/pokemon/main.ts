let AllPokemonData: any[] = [];
let FilteredData: any[] = [];
let timer: string = "";

const loadMoreBtn = document.getElementById('load-more') as HTMLButtonElement;
const Grid = document.getElementById('grid') as HTMLElement;
const SelectType = document.getElementById("select-type") as HTMLSelectElement;
const searchInput = document.getElementById('search') as HTMLInputElement;

interface Pokemon {
    name: string;
    img: string;
    type: string;
    hp: number;
    attack: string;
    weight: number;
    height: number;
}

interface ApiResponse {
    results: { name: string; url: string; }[];
    sprites: { other: { dream_world: { front_default: string; } } };
    types: { type: { name: string; } }[];
    stats: { base_stat: number; }[];
    abilities: { ability: { name: string; } }[];
}

async function getTwentyData(): Promise<void> {
    const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${AllPokemonData.length}`);
    console.log(apiResp);
    const TwentyData: ApiResponse = await apiResp.json();

    const Promises = TwentyData.results.map((elem) => fetch(elem.url));

    const twentyApiRes = await Promise.all(Promises);
    const pokemonData = await Promise.all(twentyApiRes.map(async (elem) => await elem.json()));

    AllPokemonData.push(...pokemonData);
    FilteredData = AllPokemonData;
    DisplayData(AllPokemonData);
}

async function Main(): Promise<void> {
    await getTwentyData();
}


function appendData(pokemon: Pokemon): void {
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

function DisplayData(filteredData: any[]): void {
    Grid.innerHTML = "";
    filteredData.forEach((elem) => {
        const singlePokemon: Pokemon = {
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

function handleFilterData(filter: string): void {
    searchInput.value = "";
    FilteredData = (filter === "All") 
        ? AllPokemonData 
        : AllPokemonData.filter((elem) => elem.types[0].type.name === filter);
    DisplayData(FilteredData);
}

function handleSearch(key: string): void {
    const newdata = FilteredData.filter((elem) => elem.name.toLowerCase().includes(key.toLowerCase()));
    DisplayData(newdata);
}

searchInput.addEventListener('input', (e) => {
    if (timer) {
        clearTimeout(Number(timer));
    }
    timer = setTimeout(() => {
        handleSearch((e.target as HTMLInputElement).value);
    }, 800).toString();
});

SelectType.addEventListener('change', (e) => {
    handleFilterData((e.target as HTMLSelectElement).value);
});

loadMoreBtn.addEventListener('click', () => {
    getTwentyData();
});

Main();