import React, { useState } from "react";
import "./expenseForm.css";
const ExpenseForm = (data) => {
  const [TitleValue, NewTitleValue] = useState("");
  const [DateValue, NewDateValue] = useState("");
  const [AmountValue, NewAmountValue] = useState("");

  const titleChangeFunction = (event) => {
    NewTitleValue(event.target.value);
  };

  const DateChangeFunction = (event) => {
    NewDateValue(event.target.value);
  };

  const AmountChangeFunction = (event) => {
    NewAmountValue(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: TitleValue,
      date: new Date(DateValue),
      amount: +AmountValue,
    };
    data.onSaveNewExpense(ExpenseData);
    NewDateValue("");
    NewTitleValue("");
    NewAmountValue("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2022"
            value={DateValue}
            onChange={DateChangeFunction}
          />
        </div>
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            value={TitleValue}
            onChange={titleChangeFunction}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={AmountValue}
            onChange={AmountChangeFunction}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={data.onCancelNewExpense}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
