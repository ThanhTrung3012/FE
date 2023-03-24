import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';

import { showRoomService } from '@App/services/showRoomService';

const useShowRoomDetail = () => {
    const { id } = useParams();
    const isEdit = id !== 'new';

    const {
        data,
        loading,
        run: getShowRoom
    } = useRequest(showRoomService.find, {
        manual: true
    });

    useEffect(() => {
        if (isEdit) {
            getShowRoom(id);
        }
    }, [id]);

    return { showRoom: data?.data, loading, isEdit };
};

export default useShowRoomDetail;
