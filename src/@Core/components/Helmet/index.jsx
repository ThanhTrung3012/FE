

import React from 'react';
import { Helmet as HelmetWap } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Helmet = props => {
    const {
        pageTitle,
        pageDescription,
        pageKeywords,
        metaFbTitle,
        metaFbDescription,
        metaFbImage
    } = props;

    return (
        <>
            <HelmetWap>
                <title>{pageTitle}</title>
                <meta name='description' content={pageDescription} />
                <meta name='keywords' content={pageKeywords} />
                <meta property='og:title' content={metaFbTitle} />
                <meta property='og:description' content={metaFbDescription} />
                <meta property='og:type' content='website' />
                <meta property='og:image:width' content='600' />
                <meta property='og:image:height' content='315' />
                <meta property='og:image' content={metaFbImage} />
                <meta property='og:image:type' content='image/jpg' />
                <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
                />
            </HelmetWap>
            <main>{props.children}</main>
        </>
    );
};

Helmet.defaultProps = {
    pageTitle: '...',
    pageDescription: '',
    pageKeywords: '',
    metaFbTitle: '',
    metaFbDescription: '',
    metaFbImage: ''
};

Helmet.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    pageDescription: PropTypes.string,
    pageKeywords: PropTypes.string,
    metaFbTitle: PropTypes.string,
    metaFbDescription: PropTypes.string,
    metaFbImage: PropTypes.string
};

export default React.memo(Helmet);
