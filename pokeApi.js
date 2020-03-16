const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


function getElement(element) {
    return document.querySelector(element);
}

const searchInput = getElement('.search-input'),
    searchButton = getElement('.search-button'),
    container = getElement('.pokemon'),
    erroMessage = getElement('.error');
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        renderDados(this.responseText);
    }
});

xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Brazil");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "6d38a0b6acmsh0476f42133ee9e0p1caa4fjsnb81196c2e18b");

var pokeName,
    pokemon,
    card;

function requestPokeInfo(url, name) {
    fetch(url + name)
        .then(response => response.json())
        .then(data => {
            pokemon = data;
        })
        .catch(err => console.log(err));
}

console.log(pokemon);

searchButton.addEventListener('click', event => {
    event.preventDefault();
    pokeName = obj.data.covid19Stats[0].confirmed;
    requestPokeInfo(baseUrl, pokeName)
});

function createCard() {
    card = `
    <div class="pokemon-picture">
        <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Nome: ${pokemon.name}</h1>
        <h2 class="number">Numero ${pokemon.id}</h2>
        <h3 class="type">Type: ${pokemon.types.map(item => ' ' + item.type.name).toString()}</h3>
        <h3 class="skill">Skills: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
        <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
        <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
    </div>`;
    return card;
}

function startApp(pokeName) {
    requestPokeInfo(baseUrl, pokeName);

    setTimeout(function() {
        container.innerHTML = createCard();
    }, 2000);
}

searchButton.addEventListener('click', event => {
    event.preventDefault();
    pokeName = obj.data.covid19Stats[0].confirmed;
    startApp(pokeName)
});

xhr.send(data);