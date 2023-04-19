import React from "react";
import Stock from "./Stock";
import { render } from "react-dom";

function StockContainer({ stocks, addStock }) {
  const renderStocks = stocks.map( stock => <Stock key={stock.id} stock={stock} onStockClick={addStock} />)
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
