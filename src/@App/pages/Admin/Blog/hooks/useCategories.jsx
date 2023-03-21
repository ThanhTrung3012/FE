import { useRequest } from 'ahooks';

import { blogCategoryService } from '@App/services/blogCategoryService';
import { useEffect } from 'react';

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
