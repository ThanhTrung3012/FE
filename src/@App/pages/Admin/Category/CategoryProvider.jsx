import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

import { categoryService } from '@App/services/categoryService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const CategoryProvider = props => {
    const categoryRequests = useRequest(categoryService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getcategories } = categoryRequests;
    const categoryTableHandler = useCoreTable(categoryRequests);

    const { runAsync: handleDeleteCategory } = useRequest(categoryService.delete, {
        manual: true,
        onSuccess: () => {
            categoryTableHandler.handleFetchData();
            successMessage('Xoá loại thành công');
        },
        onError: () => {
            errorMessage('Xoá loại thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getcategories();
    }, []);

    const data = {
        categoryTableHandler,
        handleDeleteCategory,
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default CategoryProvider;
