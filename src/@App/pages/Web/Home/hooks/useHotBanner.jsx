import { bannerService } from '@App/services/bannerService';
import { useRequest } from 'ahooks';
import React from 'react';

const useHotBanner = () => {
    const {
        data,
        loading: loadingHotBanners,
        run: getHotBanners
    } = useRequest(bannerService.getByDisplay, {
        manual: true
    });

    return { hotBanners:data?.data, loadingHotBanners, getHotBanners };
};

export default useHotBanner;
