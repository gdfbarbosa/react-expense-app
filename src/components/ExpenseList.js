import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
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
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          date={expense.date}
          value={expense.value}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
