import React from 'react';
import { Box} from '@mui/material';
import Helmet from '@Core/components/Helmet';

const Home = () => {

    return (
        <Helmet pageTitle='Wellcom to my app' pageDescription='Wellcom to my app'>
            <Box className='w-[1200px] mx-auto flex items-center justify-center h-screen'>
                <h1>Chào mừng đến với ứng dụng của tôi!</h1>
            </Box>
        </Helmet>
    );
};

export default Home;
