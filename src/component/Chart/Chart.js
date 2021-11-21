import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (ChartData) => {
  const valueArray = ChartData.dataPoints.map((dataPoint) => dataPoint.value);
  const maximum = Math.max(...valueArray);
  return (
    <div className="chart">
      {ChartData.dataPoints.map((eachData) => (
        <ChartBar
          key={eachData.label}
          label={eachData.label}
          value={eachData.value}
          maxValue={maximum}
        />
      ))}
    </div>
  );
};

export default Chart;
