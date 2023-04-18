import React from "react";
import Stock from "./Stock";
import { render } from "react-dom";

function StockContainer({ stocks }) {
  const renderStocks = stocks.map( stock => <Stock stock={stock} />)
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
