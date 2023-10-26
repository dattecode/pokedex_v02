import React from "react";
import "./styles/loadingCss.css";
import gengar from "../gif/loadingGif.gif";
import { AnimatePresence, motion } from "framer-motion";
const Loading = () => {
  return (
    <motion.div
      className="loadingContainer"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
    >
      <img src={gengar} />
      <h2 className="loadingN">Loading . . .</h2>
    </motion.div>
  );
};

export default Loading;
