import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { categoryService } from '@App/services/categoryService';

const useCategoryDetail = () => {
    const { id } = useParams();
    const isEdit = id !== 'new';

    const {
        data,
        loading,
        run: getCategory
    } = useRequest(categoryService.find, {
        manual: true
    });

    useEffect(() => {
        if (isEdit) {
            getCategory(id);
        }
    }, [id]);

    return { category: data?.data, loading, isEdit };
};

export default useCategoryDetail;
