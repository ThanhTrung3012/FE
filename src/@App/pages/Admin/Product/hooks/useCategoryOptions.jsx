import { useRequest } from 'ahooks';
import { useEffect } from 'react';

import { categoryService } from '@App/services/categoryService';

const useCategoryOptions = () => {
    const {
        data,
        loading,
        run: getCategory
    } = useRequest(categoryService.list, {
        manual: true
    });

    useEffect(() => {
        getCategory({page_size:1000000})
    }, []);

    return { categoryOptions: data?.data, loading };
};

export default useCategoryOptions;
