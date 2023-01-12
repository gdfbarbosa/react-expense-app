import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2>No expenses found!</h2>;
  }

  return props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      id={expense.id}
      title={expense.title}
      date={expense.date}
      value={expense.value}
    />
  ));
};

export default ExpenseList;
