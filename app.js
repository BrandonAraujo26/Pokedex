fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response => response.json())
.then(allpokemon => {
    var pokemons = [];

    allpokemon.results.map(val => {
        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => {
            pokemons.push({
                nome: val.name,
                imagem: pokemonSingle.sprites.front_default
            });

            if (pokemons.length == 10) {
                var pokemonBoxes = document.querySelector('.boxes');
                pokemonBoxes.innerHTML = "";

                pokemons.map(val => {
                    pokemonBoxes.innerHTML += `
                        <div class="box-pokemons">
                            <img src="${val.imagem}" />
                            <p>${val.nome}</p>
                        </div>
                    `;
                });
            }
        });
    });
});
