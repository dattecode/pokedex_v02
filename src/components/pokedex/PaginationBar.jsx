import React from "react";
import "./styles/paginarionBarCss.css";
import { motion } from "framer-motion";

const PaginationBar = ({
  pagesCurrentBlock,
  lastPage,
  setCurrentPage,
  currentPage,
}) => {
  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  const hancleCLickNext = () => {
    const numbr = currentPage + 1;
    setCurrentPage(numbr);
  };

  const handleClickBack = () => {
    const numbr = currentPage - 1;
    setCurrentPage(numbr);
  };

  const handleLastPage = () => {
    setCurrentPage(lastPage);
  };

  const handleOnePage = () => {
    setCurrentPage(1);
  };

  return (
    <motion.article className="paginationContainer" layout>
      {currentPage != 1 && (
        <motion.button
          onClick={() => handleOnePage()}
          className="btnPage"
          whileHover={{ scale: 1.2 }}
        >
          {"<<"}
        </motion.button>
      )}

      {currentPage != 1 && (
        <motion.button
          onClick={() => handleClickBack()}
          className="btnPage"
          whileHover={{ scale: 1.2 }}
        >
          {"<"}
        </motion.button>
      )}

      <ul className="ulBar">
        {pagesCurrentBlock.map((page) => (
          <motion.li
            whileHover={{ scale: 1.2 }}
            key={page}
            className={`pageLi ${page === currentPage && "pageOn"}`}
            onClick={() => handleClickPage(page)}
          >
            {page}
          </motion.li>
        ))}
      </ul>
      {currentPage !== lastPage && (
        <motion.button
          onClick={() => hancleCLickNext()}
          className="btnPage"
          whileHover={{ scale: 1.2 }}
        >
          {">"}
        </motion.button>
      )}
      {currentPage !== lastPage && (
        <motion.button
          onClick={handleLastPage}
          className="btnPage"
          whileHover={{ scale: 1.2 }}
        >
          {">>"}
        </motion.button>
      )}
    </motion.article>
  );
};

export default PaginationBar;
