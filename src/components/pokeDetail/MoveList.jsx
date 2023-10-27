import React from 'react'
import MoveDesc from './MoveDesc';
import "./styles/moveStyle.css"

const MoveList = ({moves}) => {

  return (
    <article>
      <div className="titleStats">
        <div className="barGrayName"></div>
        <h2>Moves</h2>
        <div className="barGrayName"></div>
      </div>
      <ul className='movesContainer'>
        <div className='subTitleMove'>
          <h3 className='moveStat'>Move</h3>
          <h3 className='moveStat'>lvl-method</h3>
          <h3 className='moveStat'>Power</h3>
          <h3 className='moveStat'>Pp</h3>
          <h3 className='moveStat'>Type</h3>
        </div>
        {
          moves?.map((move) => <MoveDesc key={move.move.url} move={move}/>)
        }
      </ul>
    </article>
  )
}

export default MoveList