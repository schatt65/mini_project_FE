// ProgressBarChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface ProgressBarChartProps {
  label?: string;
  value: number;
  max?: number;
}

const BarChartMapping: React.FC<ProgressBarChartProps> = ({
  label = "Progress",
  value,
  max = 100,
}) => {
  const data: ChartData<"bar", number[], string> = {
    // labels: [label],
    datasets: [
      {
        label: `${value}%`,
        data: [value],
        backgroundColor: "#4caf50",
        borderRadius: 5,
        barThickness: 30,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        max,
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChartMapping;
