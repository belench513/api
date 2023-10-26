
    // Función para hacer la solicitud a la PokeAPI
    function getPokemonData(pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
          // Manejar la información recibida
          displayPokemonInfo(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    // Función para mostrar la información del Pokémon
    function displayPokemonInfo(data) {
      const pokemonInfoDiv = document.getElementById('pokemon-info');
      pokemonInfoDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height} dm</p>
        <p>Weight: ${data.weight} hg</p>
      `;
    }

    // Ejemplo de uso con un Pokémon específico (puedes cambiar el nombre)
    getPokemonData('pikachu');
  
