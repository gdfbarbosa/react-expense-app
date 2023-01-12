import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const onSaveExpenseData = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random(),
    };
    props.onAddExpense(expense);
    closeForm();
  };
  const closeForm = () => {
    setShowForm(false);
  };
  const openForm = () => {
    setShowForm(true);
  };

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancelNewExpenseForm={closeForm}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button className="confirm-btn" onClick={openForm}>
          New
        </button>
      </div>
    );
  }
};

export default NewExpense;
