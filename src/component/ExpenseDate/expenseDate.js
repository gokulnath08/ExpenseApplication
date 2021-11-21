import "./expenseDate.css";
function ExpenseDate(dataFromApp) {
  const year = dataFromApp.date.getFullYear();
  const month = dataFromApp.date.toLocaleString("en-us", { month: "long" });
  const day = dataFromApp.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
