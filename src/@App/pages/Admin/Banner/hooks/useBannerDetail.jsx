import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { bannerService } from '@App/services/bannerService';

const useBannerDetail = () => {
    const { id } = useParams();
    const isEdit = id !== 'new';

    const {
        data,
        loading,
        run: getBanner
    } = useRequest(bannerService.find, {
        manual: true
    });

    useEffect(() => {
        if (isEdit) {
            getBanner(id);
        }
    }, [id]);

    return { banner: data?.data, loading, isEdit };
};

export default useBannerDetail;
