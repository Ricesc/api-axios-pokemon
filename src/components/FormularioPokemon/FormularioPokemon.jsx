import { useState } from "react";

const FormularioPokemon = ({ setPokemon }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setPokemon(searchTerm.toLowerCase());
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="buscarPokemon">Buscar Pokemon: </label>
            <input
                type="text"
                id="buscarPokemon"
                name="buscarPokemon"
                placeholder="Nombre del Pokémon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default FormularioPokemon;
