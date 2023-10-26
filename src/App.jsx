import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import PokeDetails from "./pages/PokeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoutes/>}>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemonDetails/:pokemonId" element={<PokeDetails/>}/>
      </Route>
    </Routes>
  );
}

export default App;
