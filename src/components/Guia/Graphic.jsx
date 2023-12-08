'use client'

import ReactApexChart from 'react-apexcharts'
import { useState, useEffect } from 'react'
export default function Graphic({ data }) {

  const [isDark, setIsDark] = useState(null)

  useEffect(() => {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  let color = isDark ? '#FAFAFA' : '#18181B'

      const options = {
        chart: {
          type: 'line',
          toolbar: {
            show: false,
          },
          offsetY: 50,
        },
        legend: {
          position: 'top',
          labels: {
            colors: color, 
          },
        },
        xaxis: {
          categories: data?.x?.categories,
          title: {
            text: data?.x?.text,
            style: {
              color: color,
            },
          },
          labels: {
            style: {
              colors: color,
              fontSize: '10px'
            }
          }
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return Math.round(value)
            },
            forceNiceScale: true,
            style: {
              colors: color,
            }
          },
          title: {
            text: data?.y?.text,
            style: {
              color: color,
            },
          },
         
        },
        markers: {
          size: 5, 
        },
        colors:['#A3BD36', '#FB923C'],
        title: {
          text: data.title,
          align: 'center',
          style: {
            color: color
          }
        },
        
      }

    return (
        
        <div className="w-auto">
          <ReactApexChart 
          options={options} 
          series={data.series} 
          width={'100%'}
          height={350}/>
        </div>
        
    )
}