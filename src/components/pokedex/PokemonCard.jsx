import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/pokemonCardCss.css";
import { easeIn, motion } from "framer-motion";

const PokemonCard = ({ pokemon }) => {
  //state
  const [pokemonInfo, setPokemonInfo] = useState({});



  //effect
  useEffect(() => {
    axios
      .get(pokemon)
      .then(({ data }) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
      to={`/pokemonDetails/${pokemonInfo?.id}`}
      className={`cardContainer ${
        pokemonInfo?.types && pokemonInfo.types[0]?.type?.name
      }-border`}
    >
      <div className="pokeNameCont">
        <h2
          className={`pokeNameDex ${
            pokemonInfo?.types && pokemonInfo.types[0]?.type?.name
          }-border`}
        >
          {pokemonInfo?.name}
        </h2>
      </div>
      <div
        className={`containerImgCard ${
          pokemonInfo?.types && pokemonInfo.types[0]?.type?.name
        }`}
      >
        <motion.img
          src={pokemonInfo?.sprites?.front_default}
          className="imgCard"
        />
      </div>

      <h4
        className={`cardContType ${
          pokemonInfo?.types && pokemonInfo.types[0]?.type?.name
        }-border`}
      >
        {pokemonInfo?.types?.map((type) => type.type.name).join(" / ")}
      </h4>
      <ul className="containerStatDex">
        {pokemonInfo?.stats?.map((stat, index) => (
          <li key={index} className="statsItem">
            <p>{stat.stat.name}</p>: <strong>{stat.base_stat}</strong>
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default PokemonCard;
