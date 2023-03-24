import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';

import { monthLabels, options } from '../assets';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const SalesChart = () => {
    const data = {
        labels: monthLabels,
        datasets: [
            {
                fill: true,
                label: 'Doanh số',
                data: [1, 22, 3, 5, 36, 8, 9, 110, 11, 123, 13, 14],
                backgroundColor: '#5f9ada'
            }
        ]
    };

    return (
        <Box className='w-[45%]'>
            <Line options={options} data={data} />
        </Box>
    );
};

export default SalesChart;
