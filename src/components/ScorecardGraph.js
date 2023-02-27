import React from "react";
import { Bar } from "react-chartjs-2";

const ScorecardGraph = ({ data }) => {
  const values = ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5", "Value 6", "Value 7", "Value 8"];

  const graphData = {
    labels: values,
    datasets: [
      {
        label: "Average Score",
        data: data.map((value) => value.average),
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 4,
          },
          scaleLabel: {
            display: true,
            labelString: "Rating",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Values",
          },
        },
      ],
    },
    legend: {
      display: true,
      position: "bottom",
    },
  };

  return (
    <div className="graph-container">
      <Bar data={graphData} options={options} />
    </div>
  );
};

export default ScorecardGraph;
