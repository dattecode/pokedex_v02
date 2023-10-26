import React from "react";
import "./styles/homeCss.css";
import { useDispatch } from "react-redux";
import { loginTrainer } from "../store/trainer.slice";
import { useNavigate } from "react-router-dom";
import imgPoke from "../imgs/pokeTittle.png";
import trainer from "../gif/trainerGif.gif";
import Layout from "../components/layouts/homeL/Layout";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <article className="containerHome">
      <section className="containerTop">
        <img src={imgPoke} className="homeTI" />
        <section className="searchContainer">
          <div className="infoContainerHome">
            <h2 className="trainerTitle">¡ Hello Trainer !</h2>
            <p>to start give me your name</p>
            <form onSubmit={handleSubmit} className="formHome">
              <input
                type="text"
                id="nameTrainer"
                autoComplete="off"
                className="inputHome"
              />
              <button className="btnHome">Start</button>
            </form>
          </div>
          <img src={trainer} className="homeTrainer" />
        </section>
      </section>
      <Layout />
    </article>
  );
};

export default Home;
