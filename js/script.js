const boton = document.querySelector('#obtenerPokemon');
const input = document.querySelector('#pokemonInput');
const div = document.querySelector('#resultado');

function validarNombre(nombre) {
    return nombre.toLowerCase().trim();
}

boton.addEventListener('click', async function () {
    const nombreBusqueda = validarNombre(input.value);

    if (!nombreBusqueda) {
        div.innerHTML = '<p class="empty">Por favor, ingresa un nombre.</p>';
        return;
    }

    // cargando
    div.innerHTML = `
        <div>
            <div class="loader"></div>
            <p class="empty">Buscando...</p>
        </div>
    `;
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreBusqueda}`);
        
        if (!respuesta.ok) {
            throw new Error('No se encontró el Pokémon');
        }

        const pokemon = await respuesta.json();

        div.innerHTML = `
            <div class="user-card" style="grid-column: 1/-1; width: 100%; justify-content: center;">
                <img src="${pokemon.sprites.front_default}" class="foto" alt="${pokemon.name}" style="width: 120px; height: 120px;"/>
                <div class="meta">
                    <div class="name">${pokemon.name.toUpperCase()}</div>
                    <div class="info"><strong>Tipos:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</div>
                    <div class="info"><strong>Peso:</strong> ${pokemon.weight / 10} kg</div>
                    <div class="info"><strong>Altura:</strong> ${pokemon.height / 10} m</div>
                </div>
            </div>
        `;

    } catch (error) {
        div.innerHTML = `<p class="empty" style="color: red;">Error: ${error.message}</p>`;
    }
});