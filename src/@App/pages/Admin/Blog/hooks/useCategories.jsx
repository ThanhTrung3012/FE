import { useRequest } from 'ahooks';
import { useEffect } from 'react';

import { blogCategoryService } from '@App/services/blogCategoryService';

const useCategories = () => {
    const {
        data,
        loading,
        run: getCategories
    } = useRequest(blogCategoryService.list, {
        manual: true
    });

    useEffect(() => {
        getCategories()
    }, []);

    return { categories: data?.data, loading };
};

export default useCategories;
