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
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';

import { monthLabels, options2 } from '../assets';

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

const ProductChart = () => {
    const data2 = {
        labels: monthLabels,
        datasets: [
            {
                label: 'Lượt bán',
                data: [1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14],
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'Đánh giá',
                data: [1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14],
                backgroundColor: '#007aff'
            }
        ]
    };

    return (
        <Box className='w-[45%]'>
            <Bar options={options2} data={data2} />
        </Box>
    );
};

export default ProductChart;
