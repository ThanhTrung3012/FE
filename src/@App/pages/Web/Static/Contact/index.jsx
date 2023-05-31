import StaticPageLayout from '@App/components/Layout/StaticPageLayout';
import React from 'react';
import { useParams } from 'react-router-dom';
import Introduction from './components/Introduction';
import Shops from './components/Shops';
import Contact from './components/Contact';
import { WEB_ROUTERS } from '@App/configs/constants';

const ContactWapper = () => {
    const {page} = useParams()

    const menus = [
        {label: 'Giới thiệu công ty',path: WEB_ROUTERS.staticPage.contact.introduction},
        {label: 'Hệ thống cửa hàng',path: WEB_ROUTERS.staticPage.contact.shops},
        {label: 'Liên hệ với chúng tôi',path: WEB_ROUTERS.staticPage.contact.contact},
    ]

    return (
        <StaticPageLayout
            menus={menus}
            content={
                <div>
                    {page === 'introduction' && <Introduction />}
                    {page === 'shops' && <Shops />}
                    {page === 'lien-he' && <Contact />}
                </div>
            }
        />
    );
};

export default ContactWapper;
