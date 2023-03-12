import React from 'react';
import { Box, Typography } from '@mui/material';
import Helmet from '@Core/components/Helmet';

const Home = () => {

    return (
        <Helmet pageTitle='Wellcom to my app' pageDescription='Wellcom to my app'>
            <Box className='w-[1200px] mx-auto flex items-center justify-center h-screen'>
                <Typography>Wellcom to my app</Typography>
            </Box>
        </Helmet>
    );
};

export default Home;
