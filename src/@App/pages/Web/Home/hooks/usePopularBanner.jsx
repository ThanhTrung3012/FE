import { bannerService } from '@App/services/bannerService';
import { useRequest } from 'ahooks';
import React from 'react';

const usePopularBanner = () => {
    const {
        data,
        loading: loadingPopularBanners,
        run: getPopularBanners
    } = useRequest(bannerService.getByDisplay, {
        manual: true
    });

    return { popularBanners:data?.data, loadingPopularBanners, getPopularBanners };
};

export default usePopularBanner;
