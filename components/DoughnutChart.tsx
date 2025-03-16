'use client'

import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "Chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = () => {
    return <Doughnut data={[]} />
}
export default DoughnutChart
