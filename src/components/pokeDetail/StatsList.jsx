import React from 'react'
import StatsBar from './StatsBar';
import "./styles/statsBarCss.css"

const StatsList = ({pokeInfo}) => {

  const {stats} = pokeInfo

  return (
    <article className='contStatDetail'>
      <ul className='statUl'>
        {
          stats?.map((stat, i) => <StatsBar key={i} stat={stat}/>)
        }
      </ul>
    </article>
  )
}

export default StatsList