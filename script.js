


  function getPokemonData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        displayPokemonInfo(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        displayError();
      });
  }

  function displayPokemonInfo(data) {
    const pokemonInfoDiv = document.getElementById("pokemon-info")
}
  function getPokemonData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        displayPokemonInfo(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        displayError();
      });
  }

  function displayPokemonInfo(data) {
    const pokemonInfoDiv = document.getElementById('pokemon-info');
    const abilities = data.abilities.map(ability => ability.ability.name).join(', ');

    pokemonInfoDiv.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Height: ${data.height} dm</p>
      <p>Weight: ${data.weight} hg</p>
      <p>Abilities: ${abilities}</p>
    `;
  }

  function displayError() {
    const pokemonInfoDiv = document.getElementById('pokemon-info');
    pokemonInfoDiv.innerHTML = '<p>Pokémon not found. Please try again.</p>';
  }

  function searchPokemon() {
    const pokemonInput = document.getElementById('pokemonInput');
    const pokemonName = pokemonInput.value.trim();

    if (pokemonName !== '') {
      getPokemonData(pokemonName);
    } else {
      alert('Please enter a Pokémon name.');
    }
  }
