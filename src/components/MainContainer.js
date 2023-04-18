import React, { useState, useEffect }from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const stocksUrl = "http://localhost:3001/stocks/"
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(()=>{
    fetch(stocksUrl)
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])

  function addStockToPortfolio(stock) {
    setPortfolio([...portfolio, stock])
  }

  function removeStockFromPortfolio(removedStock) {
    const updatedPortfolio = portfolio.filter(stock => stock.id !== removedStock.id)
    setPortfolio(updatedPortfolio)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addStock={addStockToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} removeStock={removeStockFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
