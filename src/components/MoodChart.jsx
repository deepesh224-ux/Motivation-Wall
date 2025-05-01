// MoodChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MoodChart({ moodCounts }) {
  // Data for the chart
  const data = {
    labels: Object.keys(moodCounts), // ["😊", "😐", "😢", "😠"]
    datasets: [
      {
        label: "Mood Count",
        data: Object.values(moodCounts), // [count for 😊, count for 😐, etc.]
        backgroundColor: ["#FFCD56", "#36A2EB", "#FF6384", "#00FFFF"], // Different colors for each mood
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Mood Statistics",
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default MoodChart;
