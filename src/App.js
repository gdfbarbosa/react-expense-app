import { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Expense Tracker</h1>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
};

export default App;
