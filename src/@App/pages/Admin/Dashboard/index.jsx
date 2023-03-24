import React from 'react';
import { Box } from '@mui/material';

import SalesChart from './components/SalesChart';
import ProductChart from './components/ProductChart';

const Dashboard = () => {
    return (
        <Box className="pb-10">
            <Box className='flex justify-center gap-x-20 mb-20'>
                <SalesChart />
                <ProductChart />
            </Box>
            <Box className='flex justify-center gap-x-20'>
                <ProductChart />
                <SalesChart />
            </Box>
        </Box>
    );
};

export default Dashboard;
