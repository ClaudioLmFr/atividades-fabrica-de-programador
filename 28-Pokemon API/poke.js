async function listaPokemons() {
    for(let i = 1; i<= 150; i++) {
        const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const JSONPokemons = await pokemons.json()
        document.getElementById('saida'). innerHTML += `
        <p>${JSONPokemons.name}</p>
        <img src=${JSONPokemons.sprites.other.dream_world.front_default} />
        <p>${JSONPokemons.types.map(obj => obj.type.name).join(' | ')}</p> 
        `
    }
}
listaPokemons()