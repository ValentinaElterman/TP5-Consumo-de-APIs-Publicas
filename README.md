"# TP5-Consumo-de-APIs-Publicas" 
Las estructuras de las URLs las dedujimos a partir de las instrucciones de cómo implementar el uso de la API de pokemones. A partir del comando "ctrl f" buscamos palabras específicas que eran clave para identificar las URLs, por ejemplo: limit, type. 

La base de la url es: https://pokeapi.co/api/v2/recurso/parámetro, siendo el recurso el endpoint.

El endpoint de casi todos los https es pokemon (ejemplo: https://pokeapi.co/api/v2/pokemon/pikachu). En este caso, obtiene al pokemon pikachu por su nombre. Para buscar otro pokémon simplemente reemplaza "pikachu" por el otro nombre. 

El otro endpoint utilizado es type (https://pokeapi.co/api/v2/type/10/) que obtiene informacion de un tipo especifico, en este caso el tipo "fire" (es lo mismo que el 10). 
1. ObtenerPokémonPorNombre
URL: https://pokeapi.co/api/v2/pokemon/pikachu
Método HTTP: GET
Status code: 200 OK
Descripción: Devuelve toda la información del Pokémon Pikachu.
Estructura general del JSON:
name
id
height
weight
types
sprites
Propiedades relevantes:
Nombre (name)
Tipos (types)
Imagen

2. ObtenerPokémonPorID
URL: https://pokeapi.co/api/v2/pokemon/2
Método HTTP: GET
Status code: 200 OK
Descripción: Devuelve la información del Pokémon con ID 2 (Ivysaur).
Estructura JSON: igual al endpoint anterior.
Propiedades relevantes:
Nombre
ID
Tipos
Imagen

3. ObtenerListaLimitadaDePokémon
URL: https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20
Método HTTP: GET
Status code: 200 OK
Descripción: Devuelve una lista paginada de Pokémon.
Estructura del JSON:
count
next
previous
results (array de Pokémon)
Propiedades relevantes:
Nombre (name)

4. ObtenerInformaciónDeUnTipoEspecífico
URL: https://pokeapi.co/api/v2/type/10/
Método HTTP: GET
Status code: 200 OK
Descripción: Devuelve información del tipo “fire”.
Estructura del JSON:
name
pokemon (lista de Pokémon de ese tipo)
damage_relations
Propiedades relevantes:
Nombre del tipo
Lista de Pokémon asociados

5. GenerarErrorIntencional
URL: https://pokeapi.co/api/v2/pokemon/pikachuu
Método HTTP: GET
Status code: 404 Not Found
Descripción: Se intenta acceder a un recurso inexistente.
Resultado:
La API responde con un error “Not Found”.
No devuelve un JSON válido con datos útiles.

Ante un error (ejemplo: https://pokeapi.co/api/v2/pokemon/pikachuu) aparece el mensaje de "not found", siendo es status code 404.

El proyecto esta estructurdo por dos carpetas: css que contiene un archivo de style.css (estilos) y una carpeta js que contiene un archivo java script (logica principal). Luego, afuera de la de carpeta hay dos html, el fetch (pruebas de request) y el index (estructura principal), junto con el README.

Usamos la plantilla de Jessie como base, cambiando https y agregando lo necesario para este tp.

Dificultades: empezar y, mas que nada, entender que debiamos modificar.