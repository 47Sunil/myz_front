import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function SplineChart({ spinChartData }) {
  const { dates, averageValues } = spinChartData;
  const options = {
    chart: {
      type: 'spline',
      backgroundColor: '#1E222D',
      height: 250,
      width: 540,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: dates,
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
        text: 'Amount',
      },
      tickInterval: 100, // set the tick interval to 50
      max: 2000, // set the maximum value to 250
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
      series: {
        pointPlacement: 'on',
      },
    },
    series: [
      {
        name: 'Average Order Value',
        data: averageValues,
        type: 'areaspline',
        color: '#3908C5',
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, '#3908C5'],
            [0.2, '#392C70'],
            [1, '#1E222D'],
          ],
        },
        threshold: null,
        marker: {
          enabled: true,
          radius: 6,
          lineWidth: 2,
          lineColor: '#3908C5',
          fillColor: '#ffffff', // set the marker fill color to white
          dataLabels: {
            enabled: true,
            useHTML: true, // enable HTML for data labels
            y: -10, // adjust y position of data label
            formatter: function () {
              // use HTML to add emoji to data label
              return '<span style="font-size: 24px;">👍</span>';
            },
            style: {
              color: '#ffffff',
              textOutline: 'none',
              fontWeight: 'normal',
            },
          },
        },
      },
    ],
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
        <span className='text-[#BDB9B9] border border-[#BDB9B9] rounded-lg text-xl  p-2 ml-[50px] font-semibold'>
          AVERAGE ORDER VALUE
        </span>
      </div>
      <span className='w-[95%]'>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </span>
    </div>
  );
}

export default SplineChart;
