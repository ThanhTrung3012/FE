import React from 'react';
import { Link } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import ContactTable from './components/ContactTable';
import ContactProvider from './ContactProvider';

const ContactList = () => {
    const breadcrumbs = [<Link to={CMS_ROUTERS.contact.list}>Liên hệ</Link>];

    return (
        <ContactProvider>
            <CmsPageContent
                title='Quản lý liên hệ'
                breadcrumbs={breadcrumbs}
                content={<ContactTable />}
            />
        </ContactProvider>
    );
};

export default ContactList;
