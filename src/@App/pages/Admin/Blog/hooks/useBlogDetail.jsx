import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { blogService } from '@App/services/blogService';

const useBlogDetail = () => {
    const { id } = useParams();
    const isEdit = id !== 'new';

    const {
        data,
        loading,
        run: getBlog
    } = useRequest(blogService.find, {
        manual: true
    });

    useEffect(() => {
        if (isEdit) {
            getBlog(id);
        }
    }, [id]);

    return { blog: data?.data, loading, isEdit };
};

export default useBlogDetail;
