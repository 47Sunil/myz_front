import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function BarChart({ trafficSource }) {
  const options = {
    chart: {
      type: 'column', // change chart type to column
      backgroundColor: '#1E222D',
      height: 250,
      width: 540,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: ['DESKTOP', 'MOBILE', 'TABLET'], // change x-axis categories
      labels: {
        style: {
          color: '#C5C3C3', // set x-axis label color to white
        },
      },
      lineWidth: 2,
    },
    legend: {
      enabled: false, // remove the legend
    },
    yAxis: {
      title: {
        text: null,
      },
      tickInterval: 10, // set the tick interval to 50
      max: 100, // set the maximum value to 250
      gridLineWidth: 1, // add grid line width
      gridLineColor: '#4E5053', // add grid line color
      gridZIndex: 10000,
      lineWidth: 2,
      labels: {
        style: {
          color: '#C5C3C3', // set x-axis label color to white
        },
      },
    },
    plotOptions: {
      column: {
        // set options for column chart
        pointPadding: 0.2,
        borderWidth: 0,
        colorByPoint: true,
        pointWidth: 35, // set the width of the bars to 50px
      },
    },
    // series: [
    //   {
    //     name: 'Dummy Series',
    //     data: [100, 250, 70],
    //     type: 'column',
    //     borderRadius: 5, // add border radius to the bars
    //     colors: ['#ED6904', '#5A34C3', '#04E7E0'], // change the colors of the bars
    //     // ... other series options
    //   },
    // ],
    series: trafficSource,
  };

  return (
    <div
      className='bg-[#1E222D] gap-[20px] rounded-2xl pt-[40px] max-h-[24rem]  max-w-[570px] flex  items-center flex-col'
      style={{
        boxShadow: '#2D333D 3px 3px 25px 10px inset',
        border: '1px solid #909094',
      }}
    >
      <div className='w-full'>
        <span className='text-[#BDB9B9] border border-[#BDB9B9] rounded-lg text-xl px-2 py-2 ml-[50px] font-semibold'>
          SESSION BY TRAFFIC SOURCE
        </span>
      </div>
      <span className='w-[98%]'>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </span>
    </div>
  );
}

export default BarChart;
