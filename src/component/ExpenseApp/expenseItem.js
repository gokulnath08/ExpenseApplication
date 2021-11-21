import ExpenseApp from "./expenseApp";
import Card from "../Card/card";
import "./expenseApp.css";

const ExpenseItem = (expense) => {
  let expenseContent = <p style={{ color: "white" }}>No Data Found.</p>;
  if (expense.expenseData.length > 0) {
    expenseContent = expense.expenseData.map((expense) => (
      <ExpenseApp
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <Card className="expenses">{expenseContent}</Card>;
};
export default ExpenseItem;
