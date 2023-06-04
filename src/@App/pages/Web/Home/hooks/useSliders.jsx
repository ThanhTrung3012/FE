import { bannerService } from '@App/services/bannerService';
import { useRequest } from 'ahooks';
import React from 'react';

const useSliders = () => {
    const {
        data: sliders,
        loading: loadingSliders,
        run: getSliders
    } = useRequest(bannerService.getByDisplay, {
        manual: true
    });

    return { sliders, loadingSliders, getSliders };
};

export default useSliders;
