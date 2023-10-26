import React from 'react'
import PokemonCard from './PokemonCard';
import "./styles/pokemonListCss.css"
import { motion } from 'framer-motion';


const PokemonList = ({pokemons}) => {

  return (
    <motion.section className='containerList' layout>
      {
        pokemons.map((pokemon) => 
        <PokemonCard 
        pokemon={pokemon.url}
        key={pokemon.url}
        />)
      }
    </motion.section>
  )
}

export default PokemonList