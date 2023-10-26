import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import "./styles/pokedexCss.css";
import DexLayout from "../components/layouts/pokedexL/DexLayout";
import { AnimatePresence, motion } from "framer-motion";
import pagination from "../utils/pagination";
import PaginationBar from "../components/pokedex/PaginationBar";
import { useSelector } from "react-redux";
import Loading from "./Loading.jsx";

const Pokedex = () => {
  //state
  const [pokemons, setPokemons] = useState([]);
  const [spokemon, setSpokemon] = useState("");
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { name } = useSelector((store) => store.trainer);
  const [isLoading, setisLoading] = useState(false);

  //https
  const getAllPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
      .then(({ data }) => setPokemons(data.results))
      .catch((err) => console.log(err));
  };

  const getAlltypes = () => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err));
  };

  //logic
  const pokemonByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(spokemon)
  );

  const { pokemonsInPage, pagesCurrentBlock, lastPage } = pagination(
    currentPage,
    pokemonByName
  );

  const handleFilterPokemon = (e) => {
    e.preventDefault();
    let fPoke = e.target.searchP.value.toLowerCase().trim("");
    setSpokemon(fPoke);
  };

  const handleTypes = (e) => {
    e.preventDefault();
    setCurrentType(e.target.value);
  };

  //effect

  useEffect(() => {
    if (currentType !== "") {
      axios
        .get(`https://pokeapi.co/api/v2/type/${currentType}/`)
        .then(({ data }) => {
          setPokemons(data.pokemon.map((poke) => poke.pokemon));
        })
        .catch((err) => console.log(err));
        setCurrentPage(1)
    } else {
      getAllPokemon();
      setCurrentPage(1)
    }
  }, [currentType]);

  useEffect(() => {
    setisLoading(true);
    const timerLoad = setTimeout(() => {
      setisLoading(false);
    }, [2000]);
    return () => {
      clearInterval(timerLoad);
    };
  }, [pokemons]);

  useEffect(() => {
    getAlltypes();
    getAllPokemon();
  }, []);

  return (
    <div className="pokedexContainer">
      <DexLayout />
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>
      <h3 className="traineNameDex">! Welcome {name} ¡ </h3> <span>look for your favorite pokemon</span>
      <section className="formsContainer">
        <form onSubmit={handleFilterPokemon} className="formDex">
          <input
            type="text"
            name="searchP"
            className="inputDex"
            autoComplete="off"
          />
          <button className="btnDex">Search</button>
        </form>
        <motion.select layout onChange={handleTypes} className="selectDex">
          <option value="">All Pokemon</option>
          {types?.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </motion.select>
      </section>
      <PokemonList pokemons={pokemonsInPage} />
      <PaginationBar
        pagesCurrentBlock={pagesCurrentBlock}
        lastPage={lastPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Pokedex;
