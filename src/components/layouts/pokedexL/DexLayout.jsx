import React from 'react'
import "./dexLayoutCss.css"
import imgPoke from "./pokeTittle.png"

const DexLayout = () => {
  return (
    <section className='dexLayoutC'>
      <div className='lDexRed'></div>
      <div className='decoCont'>
        <img src={imgPoke} className='pokedexImgDex'/>
        <div className='circleDex'></div>
      </div>
      <div className='lDexBlack'></div>
    </section>
  )
}

export default DexLayout