import React, { useEffect, useState } from 'react';
import Helmet from '@Core/components/Helmet';

const Home = () => {

    return (
        <Helmet pageTitle='Wellcom to my app' pageDescription='Wellcom to my app'>
            <h1>Chào mừng đến với ứng dụng của tôi!</h1>
        </Helmet>
    );
};

export default Home;
