import { categoryService } from '@App/services/categoryService';
import { errorMessage } from '@Core/Helper/Message';
import { useRequest } from 'ahooks';
import React, { useEffect } from 'react';

const useChildrenCategories = parentId => {
    const {
        data: categories,
        loading: loadingCategories,
        run: getChildrens
    } = useRequest(categoryService.getChildrens, {
        manual: true,
        onError: () => {
            errorMessage('Có lỗi sảy ra');
        }
    });

    useEffect(() => {
        if (parentId) {
            getChildrens(parentId);
        }
    }, [parentId]);

    return { categories, loadingCategories };
};

export default useChildrenCategories;
