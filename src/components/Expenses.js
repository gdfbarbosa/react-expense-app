import { useState } from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear() === parseInt(year)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
