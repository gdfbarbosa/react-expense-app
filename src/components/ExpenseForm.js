import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    value: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, value: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, date: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData({ ...userInput, date: new Date(userInput.date) });
    setUserInput((prevState) => {
      return { ...userInput, title: "", value: "", date: "" };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Value</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.value}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
