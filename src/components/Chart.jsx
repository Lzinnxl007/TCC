'use client'

import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
  } from "chart.js"
import { useEffect, useState } from "react"
export default function Chart() {

    const [IMCArray, setIMCArray] = useState([])

    useEffect(() => {
        const IMC = JSON.parse(localStorage.getItem('IMC'))
        setIMCArray([...IMCArray, IMC])
    }, [])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip
      )

      console.log(IMCArray)
    

    return (
        <div className="max-w-md">
            <Line
            data={{
            labels: [
                "06-09-23",
                "13-09-23",
                "20-09-23",
                "27-09-23",
                "04-10-23",
                "11-10-23",
            ],
            datasets: [
                {
                data: IMCArray,
                backgroundColor: "green",
                },
            ],
            }}/>
        </div>
    )
}