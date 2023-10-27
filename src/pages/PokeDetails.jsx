import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/pokeDetailsCss.css";
import StatsList from "../components/pokeDetail/StatsList";
import DexLayout from "../components/layouts/pokedexL/DexLayout";
import Loading from "./Loading";
import { AnimatePresence, motion } from "framer-motion";
import MoveList from "../components/pokeDetail/MoveList";
import shiny from "../gif/shiny.gif";

const PokeDetails = () => {
  //state
  const [pokeInfo, setPokeInfo] = useState([]);
  const { pokemonId } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [isShiny, setIsShiny] = useState(false);

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

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>
      <DexLayout />
      <motion.div className="btnHomeDes" whileHover={{ scale: 1.3 }}>
        <Link to="/pokedex" className="linkHome">
          Go Home
        </Link>
      </motion.div>
      <main className="pokeContainer">
        <section className="containerImgs">
          <div
            className={`imgContDet ${
              pokeInfo?.types && pokeInfo?.types[0]?.type?.name
            }`}
          >
            <AnimatePresence>
              <motion.img layout
                className="imgDesc"
                src={
                  isShiny
                    ? pokeInfo?.sprites?.front_shiny
                    : pokeInfo?.sprites?.front_default
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={Math.random()}
              />
            </AnimatePresence>
          </div>
          <div className="shinyContent">
            <AnimatePresence>
              {isShiny && (
                <motion.h4
                  className="shinyText"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Is Shiny
                </motion.h4>
              )}
            </AnimatePresence>
            <motion.img
              onClick={() => setIsShiny(!isShiny)}
              src={shiny}
              className="imgShiny"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
            />
          </div>
        </section>
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
      <MoveList moves={pokeInfo?.moves} />
    </>
  );
};

export default PokeDetails;
