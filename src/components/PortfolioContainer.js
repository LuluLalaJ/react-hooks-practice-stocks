import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, removeStock }) {

  const renderPortfolio = portfolio.map(ownedStock => <Stock key={ownedStock.id} stock={ownedStock} onStockClick={removeStock}/>)


  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPortfolio}
    </div>
  );
}

export default PortfolioContainer;
