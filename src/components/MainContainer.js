import React, { useState, useEffect }from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const stocksUrl = "http://localhost:3001/stocks/"
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [category, setCategory] = useState('All')

  useEffect(()=>{
    fetch(stocksUrl)
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])

  const displayedStocks = stocks.filter(stock => stock.type === category || category === "All")

  function addStockToPortfolio(stock) {
    setPortfolio([...portfolio, stock])
  }

  function removeStockFromPortfolio(removedStock) {
    const updatedPortfolio = portfolio.filter(stock => stock.id !== removedStock.id)
    setPortfolio(updatedPortfolio)
  }

  function sortStocks(method) {
    if (method === "Alphabetically") {
      const sortedStocks = stocks.toSorted((stock1, stock2) => {
        const name1 = stock1.name.toLowerCase()
        const name2 = stock2.name.toLowerCase()
        if (name1 > name2) {
          return 1
        } else if (name1 < name2) {
          return -1
        } return 0
      })
      setStocks(sortedStocks)
    } else if (method === "Price") {
      const sortedStocks = stocks.toSorted((stock1, stock2) => stock1.price - stock2.price)
      setStocks(sortedStocks)
    }
  }

  return (
    <div>
      <SearchBar onFilter={setCategory} onSort={sortStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayedStocks} addStock={addStockToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} removeStock={removeStockFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
