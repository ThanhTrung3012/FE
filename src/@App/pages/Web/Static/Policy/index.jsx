import StaticPageLayout from '@App/components/Layout/StaticPageLayout';
import React from 'react';
import { useParams } from 'react-router-dom';
import Purchase from './components/Purchase';
import Guarantee from './components/Guarantee';
import Transport from './components/Transport';

const Policy = () => {
    const { page } = useParams();

    return (
        <StaticPageLayout
            content={
                <div>
                    {page === 'chinh-sach-mua-hang' && <Purchase />}
                    {page === 'chinh-sach-bao-hanh' && <Guarantee />}
                    {page === 'chinh-sach-van-chuyen' && <Transport />}
                </div>
            }
        />
    );
};

export default Policy;
