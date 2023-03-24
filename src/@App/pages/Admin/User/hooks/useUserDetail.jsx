import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';

import { userService } from '@App/services/userService';

const useUserDetail = () => {
    const { id } = useParams();
    const isEdit = id !== 'new';

    const {
        data,
        loading,
        run: getUser
    } = useRequest(userService.find, {
        manual: true
    });

    useEffect(() => {
        if (isEdit) {
            getUser(id);
        }
    }, [id]);

    return { user: data?.data, loading, isEdit };
};

export default useUserDetail;
