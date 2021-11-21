import React, { useState } from "react";
import "./newExpense.css";
import ExpenseForm from "../ExpenseForm/expenseForm";
const NewExpense = (newExp) => {
  const SaveNewExpenseHandler = (EnteredExpenseData) => {
    const NewExpenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    newExp.onNewExpense(NewExpenseData);
  };

  const [buttonTask, setButtonTask] = useState(false);
  const setButtonTaskHandler = () => {
    setButtonTask(true);
  };
  const cancelButtonHandler = () => {
    setButtonTask(false);
  };

  if (buttonTask === false) {
    return (
      <div className="new-expense">
        <button onClick={setButtonTaskHandler}>Add New Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveNewExpense={SaveNewExpenseHandler}
          onCancelNewExpense={cancelButtonHandler}
        />
      </div>
    );
  }
};
export default NewExpense;
