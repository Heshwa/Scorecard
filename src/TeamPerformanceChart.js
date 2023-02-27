import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TeamPerformanceChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.name),
        datasets: [
          {
            label: 'Average Rating',
            data: data.map((item) => item.averageRating),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default TeamPerformanceChart;
