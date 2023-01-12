import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./components/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //expenses.push(expense);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Expense Tracker</h1>
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseList expenses={expenses} />
      </header>
    </div>
  );
};

export default App;
