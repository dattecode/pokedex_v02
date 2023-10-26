import React from 'react'
import "./styles/statsBarCss.css"

const StatsBar = ({stat}) => {

  const barProgress = (value) => {
    const MAX_VALUE = 255;
    const percent = (100 * value) / MAX_VALUE;
    return `${percent}%`;
  };

  return (
    <li>
      <section>
        <h5>{stat?.stat?.name}</h5>
        <span>{stat?.base_stat} / 255</span>
      </section>
      <section>
        <div className='barProgress'>
          <div 
          className='progressFill'
          style={{width: barProgress(stat?.base_stat)}}></div>
        </div>
      </section>
    </li>
  )
}

export default StatsBar