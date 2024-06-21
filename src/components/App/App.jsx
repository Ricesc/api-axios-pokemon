import FormularioPokemon from "../FormularioPokemon/FormularioPokemon";
import Pokemon from "../Pokemon/Pokemon";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>API Axios Pokemon</h1>
            <FormularioPokemon />
            <Pokemon />
            <strong>En desarrollo!</strong>
        </div>
    );
}

export default App;
