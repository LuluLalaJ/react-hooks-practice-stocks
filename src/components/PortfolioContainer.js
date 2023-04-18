import React from "react";
import Stock from "./Stock";
import Portfolio from "./Portfolio";

function PortfolioContainer({ portfolio, removeStock }) {

  const renderPortfolio = portfolio.map(ownedStock => <Portfolio key={ownedStock.id} stock={ownedStock} removeStock={removeStock}/>)


  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPortfolio}
    </div>
  );
}

export default PortfolioContainer;
