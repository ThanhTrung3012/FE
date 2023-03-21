import { useRequest } from 'ahooks';
import React, { useEffect } from 'react';

import { evaluateService } from '@App/services/evaluateService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const EvaluateProvider = props => {
    const evaluateRequests = useRequest(evaluateService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getEvaluates } = evaluateRequests;
    const evaluateTableHandler = useCoreTable(evaluateRequests);

    const { runAsync: handleDeleteEvaluate } = useRequest(evaluateService.delete, {
        manual: true,
        onSuccess: () => {
            evaluateTableHandler.handleFetchData();
            successMessage('Xoá đánh giá thành công');
        },
        onError: () => {
            errorMessage('Xoá đánh giá thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getEvaluates();
    }, []);

    const data = {
        evaluateTableHandler,
        handleDeleteEvaluate
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default EvaluateProvider;
