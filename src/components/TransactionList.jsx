import React from "react";

import Transaction from "./Transaction";

function TransactionList({ info,id }) {



  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {info.map((inf) =>(
          <Transaction inf={inf} id={id}  />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
