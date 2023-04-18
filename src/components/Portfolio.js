import React from "react";

function Portfolio({ stock, removeStock }) {
    const { name, ticker, price } = stock
    return (
        <div>
            <div className="card" onClick={() => removeStock(stock)}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{ticker}: {price}</p>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;