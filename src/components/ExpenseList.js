import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
  const expenses = props.expenses;
  const expenseItems = expenses.map((expense) => (
    <ExpenseItem
      id={expense.id}
      title={expense.title}
      date={expense.date}
      value={expense.value}
    />
  ));
  return <div className="expenses">{expenseItems}</div>;
}

export default ExpenseList;
