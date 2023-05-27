import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

import { bannerService } from '@App/services/bannerService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const BannerProvider = props => {
    const bannerRequests = useRequest(bannerService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getBanners } = bannerRequests;
    const bannerTableHandler = useCoreTable(bannerRequests);

    const { runAsync: handleDeleteBanner } = useRequest(bannerService.delete, {
        manual: true,
        onSuccess: () => {
            bannerTableHandler.handleFetchData();
            successMessage('Xoá banner thành công');
        },
        onError: () => {
            errorMessage('Xoá banner thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getBanners();
    }, []);

    const data = {
        bannerTableHandler,
        handleDeleteBanner,
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default BannerProvider;
