import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../../charts/LineChart01";
import { chartAreaGradient } from "../../charts/ChartjsConfig";
import EditMenu from "../../components/DropdownEditMenu";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import BarChart01 from "../../charts/BarChart01.jsx";
import BubbleChart from "../../charts/BubbleChart.jsx";
import DashboardCard06 from "./DashboardCard06.jsx";

function DashboardCard01() {
  const chartData = {
    labels: [
      "12-01-2022",
      "01-01-2023",
      "02-01-2023",
      "03-01-2023",
      "04-01-2023",
      "05-01-2023",
      "06-01-2023",
      "07-01-2023",
      "08-01-2023",
      "09-01-2023",
      "10-01-2023",
      "11-01-2023",
      "12-01-2023",
      "01-01-2024",
      "02-01-2024",
      "03-01-2024",
      "04-01-2024",
      "05-01-2024",
      "06-01-2024",
      "07-01-2024",
      "08-01-2024",
      "09-01-2024",
      "10-01-2024",
      "11-01-2024",
      "12-01-2024",
      "01-01-2025",
    ],
    datasets: [
      // Indigo line
      {
        data: [
          732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
        ],
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartAreaGradient(ctx, chartArea, [
            {
              stop: 0,
              color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)`,
            },
            {
              stop: 1,
              color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)`,
            },
          ]);
        },
        borderColor: tailwindConfig().theme.colors.violet[500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
      // Gray line
      {
        data: [
          532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234,
          314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642,
        ],
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  const chartData2 = {
    labels: [
      "12-01-2022",
      "01-01-2023",
      "02-01-2023",
      "03-01-2023",
      "04-01-2023",
      "05-01-2023",
    ],
    datasets: [
      // Light blue bars
      {
        label: "Direct",
        data: [800, 1600, 900, 1300, 1950, 1700],
        backgroundColor: tailwindConfig().theme.colors.sky[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[600],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Blue bars
      {
        label: "Indirect",
        data: [4900, 2600, 5350, 4800, 5200, 4800],
        backgroundColor: tailwindConfig().theme.colors.violet[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  const bubbleChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    mainData: [
      { x: 0, y: 20, r: 10 },
      { x: 1, y: 30, r: 15 },
      { x: 2, y: 25, r: 12 },
      { x: 3, y: 40, r: 20 },
      { x: 4, y: 35, r: 18 },
      { x: 5, y: 50, r: 25 },
      { x: 6, y: 45, r: 22 },
      { x: 7, y: 55, r: 28 },
      { x: 8, y: 60, r: 30 },
      { x: 9, y: 70, r: 35 },
      { x: 10, y: 65, r: 32 },
      { x: 11, y: 80, r: 40 },
    ],
    subData: [
      { x: 0, y: 15, r: 8 },
      { x: 1, y: 25, r: 12 },
      { x: 2, y: 20, r: 10 },
      { x: 3, y: 35, r: 18 },
      { x: 4, y: 30, r: 15 },
      { x: 5, y: 45, r: 22 },
      { x: 6, y: 40, r: 20 },
      { x: 7, y: 50, r: 25 },
      { x: 8, y: 55, r: 28 },
      { x: 9, y: 65, r: 32 },
      { x: 10, y: 60, r: 30 },
      { x: 11, y: 75, r: 38 },
    ],
  };

  return (
    <div className="">
      {/*<div className="px-5 pt-5">*/}
      {/*  <header className="flex justify-between items-start mb-2">*/}
      {/*    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Acme Plus</h2>*/}
      {/*    /!* Menu button *!/*/}
      {/*    <EditMenu align="right" className="relative inline-flex">*/}
      {/*      <li>*/}
      {/*        <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">*/}
      {/*          Option 1*/}
      {/*        </Link>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">*/}
      {/*          Option 2*/}
      {/*        </Link>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">*/}
      {/*          Remove*/}
      {/*        </Link>*/}
      {/*      </li>*/}
      {/*    </EditMenu>*/}
      {/*  </header>*/}
      {/*  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Sales</div>*/}
      {/*  <div className="flex items-start">*/}
      {/*    <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">$24,780</div>*/}
      {/*    <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+49%</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* Chart built with Chart.js 3 */}
      {/*<div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">*/}
      {/* Change the height attribute to adjust the chart height */}
      <div>
        <LineChart data={chartData} width={389} height={128} />
      </div>
      <div>
        <BarChart01 data={chartData2} width={389} height={128} />
      </div>
      {/*<div>*/}
      {/*  <BubbleChart {...bubbleChartData} width={800} height={400} />*/}
      {/*</div>*/}
      <div>
        <DashboardCard06 />
      </div>
    </div>
  );
}

export default DashboardCard01;
