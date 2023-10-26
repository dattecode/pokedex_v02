const pagination = (currentPage, items) => {
  //items por pagina
  const ITEMS_POR_PAGE = 15;

  //items de la pagina actual
  const sliceEnd = currentPage * ITEMS_POR_PAGE;
  const sliceStart = sliceEnd - ITEMS_POR_PAGE;
  const pokemonsInPage = items.slice(sliceStart, sliceEnd);

  //ultima pagina / cantidad de paginas
  const lastPage = Math.ceil(items.length / ITEMS_POR_PAGE);

  // bloque de paginas actual
  const BLOCK_POR_PAGE = 5;
  const currentBLock = Math.ceil(currentPage / BLOCK_POR_PAGE);

  // paginas a mostrar en el bloque
  const pagesCurrentBlock = [];
  const maxPage = currentBLock * BLOCK_POR_PAGE;
  const minPage = maxPage - BLOCK_POR_PAGE + 1;

  for (let i = minPage; i <= maxPage; i++) {
    if (i <= lastPage) {
      pagesCurrentBlock.push(i);
    }
  }


  return{
    pokemonsInPage,
    pagesCurrentBlock,
    lastPage
  }

};

export default pagination;
