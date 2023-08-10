import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import { Header } from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  const [info, setInfo] = React.useState([]);

  const AppTask = (text, number) => {
    let sumOfPrevious = info.reduce(
      (accumulator, currentValue) => accumulator + currentValue.number,
      0
    );
    if (text && +number && sumOfPrevious + (+number)>=0) {
      const obj = { id: uuidv4(), text: text, number: +number };
      setInfo([...info, obj]);
    }
    // if (text && number) {
    // } else return;
  };

  function id(id) {
    setInfo(info.filter((obj) => id !== obj.id));
  }

  return (
    <>
      <Header />

      <div className="container">
        <Balance info={info} />
        <IncomeExpenses info={info} />

        <TransactionList info={info} id={id} />

        <AddTransaction AppTask={AppTask} />
      </div>
    </>
  );
}

export default App;
