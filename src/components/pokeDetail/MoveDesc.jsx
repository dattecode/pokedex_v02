import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/moveStyle.css";

const MoveDesc = ({ move }) => {
  const [desMove, setDesMove] = useState([]);

  useEffect(() => {
    axios
      .get(move.move.url)
      .then(({ data }) => setDesMove(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article className="moveContainer">
      <h4 className="moveStat">{desMove?.name}</h4>
      <p className="moveStat">
        {move.version_group_details[0]?.level_learned_at
          ? move.version_group_details[0]?.level_learned_at
          : move.version_group_details[0]?.move_learn_method.name}
      </p>
      <p className="moveStat">{desMove?.power}</p>
      <p className="moveStat">{desMove?.pp}</p>
      <p className={`moveStat moveType ${desMove?.type?.name}`}>
        {desMove?.type?.name}
      </p>
    </article>
  );
};

export default MoveDesc;
