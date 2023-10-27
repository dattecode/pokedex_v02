import React from "react";
import StatsBar from "./StatsBar";
import "./styles/statsBarCss.css";

const StatsList = ({ pokeInfo }) => {
  const { stats } = pokeInfo;

  return (
    <article className="contStatDetail">
      <div className="titleStats">
        <div className="barGrayName"></div>
        <h2>Stats</h2>
        <div className="barGrayName"></div>
      </div>

      <ul className="statUl">
        {stats?.map((stat, i) => (
          <StatsBar key={i} stat={stat} />
        ))}
      </ul>
    </article>
  );
};

export default StatsList;
