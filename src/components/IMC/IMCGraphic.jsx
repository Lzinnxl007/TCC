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

export default function Chart({ IMCData }) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip
      )

      const IMC = IMCData.map((imc) => imc.imc)

      const date = IMCData.map((date) => date.date)
    

    return (
        <div className="max-w-md">
            <Line
            data={{
            labels: date,
            datasets: [
                {
                data: IMC,
                backgroundColor: "green",
                },
            ],
            }}/>
        </div>
    )
}