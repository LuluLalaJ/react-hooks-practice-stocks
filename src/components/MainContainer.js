import React, { useState, useEffect }from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const stocksUrl = "http://localhost:3001/stocks/"
  const [stocks, setStocks] = useState([])
  const [profolio, setProfolio] = useState([])

  useEffect(()=>{
    fetch(stocksUrl)
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])

  function addStockToProfolio(stock) {
    setProfolio([...profolio, stock])
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addStock={addStockToProfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer profolio={profolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
