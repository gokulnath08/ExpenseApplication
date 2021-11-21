import Chart from "../Chart/Chart";
import Card from "../Card/card";
const ExpenseChart = (data) => {
  const ChartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of data.expenseData) {
    const ExpenseMonth = expense.date.getMonth(); // output will be 0,1,2
    ChartData[ExpenseMonth].value += expense.amount;
  }
  return (
    <Card className="expenses">
      <Chart dataPoints={ChartData} />
    </Card>
  );
};
export default ExpenseChart;
