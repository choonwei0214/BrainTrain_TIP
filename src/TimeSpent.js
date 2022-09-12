import { Pie } from '@ant-design/plots';

const TimeSpentChart = () => {
    const data = [
        {
          type: 'E Math',
          value: 8,
        },
        {
          type: 'Chinese',
          value: 6,
        },
        {
          type: 'Chemistry',
          value: 2,
        },
        {
          type: 'English',
          value: 2.5,
        },
        {
          type: 'Physics',
          value: 4,
        },
      ];
      const config = {
        autoFit: false,
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          type: 'outer',
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
      };

    return ( 
        <Pie {...config} />
     );
}
 
export default TimeSpentChart;