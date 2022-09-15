import { Pie } from "@ant-design/plots";

const TimeSpentChart = () => {
  const data = [
    {
      type: "SLS (Productivity)",
      value: 25,
    },
    {
      type: "Youtube (Entertainment)",
      value: 13,
    },
    {
      type: "Google Chrome (News and Information)",
      value: 11,
    },
    {
      type: "Others",
      value: 7,
    },
    {
      type: "Google Classroom (Productivity)",
      value: 18,
    },
  ];
  const config = {
    autoFit: false,
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],

    legend: {
      layout: "vertical",
      position: "bottom",
    },
  };

  return <Pie {...config} />;
};

export default TimeSpentChart;
