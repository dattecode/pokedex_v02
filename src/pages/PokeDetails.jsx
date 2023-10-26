import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/pokeDetailsCss.css";
import StatsList from "../components/pokeDetail/StatsList";
import DexLayout from "../components/layouts/pokedexL/DexLayout";
import Loading from "./Loading";
import { AnimatePresence, motion } from "framer-motion";

const PokeDetails = () => {
  //state
  const [pokeInfo, setPokeInfo] = useState([]);
  const { pokemonId } = useParams();
  const [isLoading, setisLoading] = useState(false);

  //logic

  //effect

  useEffect(() => {
    setisLoading(true);
    const timerLoad = setTimeout(() => {
      setisLoading(false);
    }, [1500]);
    return () => {
      clearInterval(timerLoad);
    };
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(({ data }) => setPokeInfo(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>
      <DexLayout />
      <motion.div 
      className="btnHomeDes"
      whileHover={{scale:1.3}}
      >
        <Link 
        to="/pokedex"
        className="linkHome">Go Home</Link>
      </motion.div>
      <main className="pokeContainer">
        <div
          className={`imgContDet ${
            pokeInfo?.types && pokeInfo?.types[0]?.type?.name
          }`}
        >
          <img src={pokeInfo?.sprites?.front_default} alt="" />
        </div>
        <h2># {pokeInfo?.id}</h2>
        <section className="nameContDet">
          <div className="barGrayName"></div>
          <h2>{pokeInfo?.name}</h2>
          <div className="barGrayName"></div>
        </section>

        <section className="descContant">
          <div className="mapCont">
            <h2>type</h2>
            <div className="desMapCont ">
              {pokeInfo?.types?.map((type) => (
                <h3
                  key={type.type.name}
                  className={`${type.type.name} typeBox`}
                >
                  {type.type.name}
                </h3>
              ))}
            </div>
          </div>
          <div className="mapCont">
            <h2>Skills</h2>
            <div className="desMapCont">
              {pokeInfo?.abilities?.map((skill) => (
                <h3 key={skill.ability.name} className="skill">
                  {skill.ability.name}
                </h3>
              ))}
            </div>
          </div>
        </section>
      </main>

      <StatsList pokeInfo={pokeInfo} />
    </>
  );
};

export default PokeDetails;
