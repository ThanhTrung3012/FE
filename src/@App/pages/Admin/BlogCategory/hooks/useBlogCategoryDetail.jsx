import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { blogCategoryService } from '@App/services/blogCategoryService';

const useBlogCategoryDetail = () => {
    const { id } = useParams();
    const isEdit = id !== 'new';

    const {
        data,
        loading,
        run: getCategory
    } = useRequest(blogCategoryService.find, {
        manual: true
    });

    useEffect(() => {
        if (isEdit) {
            getCategory(id);
        }
    }, [id]);

    return { blogCategory: data?.data, loading, isEdit };
};

export default useBlogCategoryDetail;
