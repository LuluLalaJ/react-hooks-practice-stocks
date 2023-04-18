import React from "react";
import Stock from "./Stock";
import Portfolio from "./Portfolio";

function PortfolioContainer({ profolio }) {

  const renderProfolio = profolio.map(ownedStock => <Portfolio key={ownedStock.id} stock={ownedStock}/>)


  return (
    <div>
      <h2>My Portfolio</h2>
      {renderProfolio}
    </div>
  );
}

export default PortfolioContainer;
