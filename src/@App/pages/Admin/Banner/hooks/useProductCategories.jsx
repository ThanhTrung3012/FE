import { useRequest } from 'ahooks';
import { useEffect } from 'react';

import { categoryService } from '@App/services/categoryService';

const useProductCategories = () => {
    const {
        data,
        loadingCategories,
        run: getCategories
    } = useRequest(categoryService.list, {
        manual: true
    });

    useEffect(() => {
        getCategories({ page_size: 1000000 });
    }, []);

    return { categories: data?.data, loadingCategories };
};

export default useProductCategories;
