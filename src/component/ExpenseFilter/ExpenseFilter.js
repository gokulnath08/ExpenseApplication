//import React, { useState } from "react";
//import Card from "../Card/card";
import "./ExpenseFilter.css";

const ExpensesFilter = (filterProps) => {
  const selectFilter = (event) => {
    filterProps.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>
          <h3>Filter by year</h3>
        </label>
        <select value={filterProps.selected} onChange={selectFilter}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
