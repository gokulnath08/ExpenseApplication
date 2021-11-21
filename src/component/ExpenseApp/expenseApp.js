import React, { useState } from "react";
import "./expenseApp.css";

import Card from "../Card/card";
import ExpenseDate from "../ExpenseDate/expenseDate";

function ExpenseApp(dataFromApp) {
  const [title, newTitle] = useState(dataFromApp.title);
  const [flag, setFlag] = useState(false);
  const clickEvent = () => {
    console.log("Clicked");
    console.log(flag);
    setFlag(true);
  };

  const getValueOfTextBox = (event) => {
    global.changedTitle = event.target.value;
  };

  const updateDoneHandler = () => {
    setFlag(false);
    newTitle(global.changedTitle);
  };

  const updateCancelHandler = () => {
    setFlag(false);
    newTitle(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={dataFromApp.date} />
      <div className="expense-item__description">
        {flag === true && (
          <div>
            <input
              className="text-input"
              type="text"
              onChange={getValueOfTextBox}
            />
            <button onClick={updateDoneHandler}>Update</button>
            <button
              onClick={updateCancelHandler}
              style={{ backgroundColor: "red" }}
            >
              Cancel
            </button>
          </div>
        )}
        {flag === false && <h2>{title}</h2>}
        <div className="expense-item__price">{dataFromApp.amount}</div>
        <button onClick={clickEvent}>Edit title</button>
      </div>
    </Card>
  );
}

export default ExpenseApp;
