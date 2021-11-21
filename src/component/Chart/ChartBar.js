import "./ChartBar.css";

const ChartBar = (chartProps) => {
  let barFillHeight = "0%";
  console.log(chartProps.maxValue);
  if (chartProps.maxValue > 0) {
    barFillHeight =
      Math.round((chartProps.value / chartProps.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{chartProps.label}</div>
    </div>
  );
};

export default ChartBar;
