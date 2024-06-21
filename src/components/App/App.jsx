import axios from "axios";
import { useState } from "react";
import FormularioPokemon from "../FormularioPokemon/FormularioPokemon";
import Pokemon from "../Pokemon/Pokemon";
import "./App.css";

function App() {
    const [pokemon, setPokemon] = useState(""); // Estado para búsqueda
    const [listaPokemon, setListaPokemon] = useState([]); // Inicializa como array
    const [loading, setLoading] = useState(false); // Estado para el botón de carga

    // Función para obtener la lista de Pokémon
    const fetchPokemonList = () => {
        setLoading(true); // Mostrar indicador de carga
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=807&offset=0`;
        axios
            .get(URL)
            .then((response) => {
                setListaPokemon(response.data.results);
                setLoading(false); // Ocultar indicador de carga
            })
            .catch((error) => {
                console.error("Error fetching Pokémon list:", error);
                setLoading(false);
            });
    };

    // Filtrar la lista basada en el término de búsqueda
    const filteredList = listaPokemon.filter(
        (p) => pokemon === "" || p.name.includes(pokemon.toLowerCase())
    );

    return (
        <div className="App">
            <h1>API Axios Pokemon</h1>
            <button onClick={fetchPokemonList}>Fetch Pokemon</button>
            {loading && <p>Cargando...</p>}
            <FormularioPokemon setPokemon={setPokemon} />
            <ol>
                {filteredList.length > 0 &&
                    filteredList.map((pokemon, index) => (
                        <Pokemon key={index} pokemon={pokemon} />
                    ))}
            </ol>
        </div>
    );
}

export default App;
