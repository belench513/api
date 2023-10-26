const apiKey = '340d8281ffmsh1403e8250414e0dp1f3989jsn568e69117290';
const url = 'https://pokedex2.p.rapidapi.com/pokedex/uk';

async function searchPokemon() {
    const searchInput = document.getElementById('searchInput');
    const pokemonInfo = document.getElementById('pokemonInfo');
    
    try {
        const response = await fetch(`${url}/${searchInput.value}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
            }
        });
        const data = await response.json();
        
        if (data && data[0]) {
            const pokemon = data[0];
            const pokemonHTML = `
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.imageurl}">
                <p>Type: ${pokemon.type.join(', ')}</p>
                <p>Abilities: ${pokemon.abilities.join(', ')}</p>
                <p>Base Experience: ${pokemon.base_experience}</p>
            `;
            pokemonInfo.innerHTML = pokemonHTML;
        } else {
            pokemonInfo.innerHTML = '<p>Pokémon no encontrado</p>';
        }
    } catch (error) {
        console.error('Error al buscar Pokémon:', error);
    }
}
