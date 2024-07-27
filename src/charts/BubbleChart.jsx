import React, { useRef, useEffect } from "react";
import {
  Chart,
  BubbleController,
  Filler,
  PointElement,
  Tooltip,
} from "chart.js";

Chart.register(BubbleController, Filler, PointElement, Tooltip);

const BubbleChart = ({ labels, mainData, subData, width, height }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: "bubble",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Main Data",
              data: mainData,
              backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
            {
              label: "Sub Data",
              data: subData,
              backgroundColor: "rgba(53, 162, 235, 0.6)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              title: undefined,
            },
            y: {
              type: "linear",
              position: "left",
              title: undefined,
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [labels, mainData, subData]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default BubbleChart;
