import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { categoryService } from '@App/services/categoryService';

const useCategoryOptions = () => {
    const { id } = useParams();

    const {
        data,
        loading,
        run: getCategory
    } = useRequest(categoryService.getOptions, {
        manual: true
    });

    useEffect(() => {
        if (id) {
            getCategory(id);
        }
    }, [id]);

    return { categoryOptions: data, loading };
};

export default useCategoryOptions;
