import StaticPageLayout from '@App/components/Layout/StaticPageLayout';
import React from 'react';
import { useParams } from 'react-router-dom';
import Introduction from './Introduction';
import Shops from './Shops';
import Contact from './Contact';

const ContactWapper = () => {
    const {page} = useParams()

    return (
        <StaticPageLayout
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
