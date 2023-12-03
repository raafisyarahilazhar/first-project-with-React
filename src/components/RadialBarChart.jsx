import React from "react";
import ReactApexChart from "react-apexcharts";

export default function RadialBarChart({ seriesData, chartTitle }) {
  const options = {
    chart: {
      type: "radialBar",
      height: 200,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450", // Warna latar belakang
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"], // Warna sektor
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [chartTitle],
    dataLabels: {
      name: {
        color: "#fff", // Warna teks nama
        fontSize: "13px",
      },
      value: {
        color: "#fff", // Warna teks persentase (value)
        fontSize: "30px",
        show: true,
      },
    },
  };

  return (
    <div className="chart">
      <ReactApexChart options={options} series={seriesData} type="radialBar" />
    </div>
  );
}
