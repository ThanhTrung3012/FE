import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Yup from '@Core/Helper/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { showRoomService } from '@App/services/showRoomService';
import { CMS_ROUTERS } from '@App/configs/constants';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';

const ShowRoomForm = props => {
    const { showRoom, isEdit } = props;
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            id: showRoom?._id ?? null,
            name: showRoom?.name ?? '',
            address: showRoom?.address ?? '',
            area: showRoom?.area ?? '',
            link_map: showRoom?.link_map ?? ''
        },
        resolver: yupResolver(
            Yup.object({
                name: Yup.string().trim().required('Tên cửa hàng là bắt buộc'),
                address: Yup.string().required('Địa chỉ cửa hàng là bắt buộc'),
                area: Yup.string().required('Khu vực là bắt buộc'),
                link_map: Yup.string().required('Link google map là bắt buộc')
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            await showRoomService.save(data);
            navigate(CMS_ROUTERS.showRoom.list);
            successMessage(isEdit ? 'Sửa cửa hàng thành công' : 'Thêm cửa hàng thành công');
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    const areaOptions = [
        { label: 'Miền bắc', value: 'MIEN-BAC' },
        { label: 'Miền trung', value: 'MIEN-TRUNG' },
        { label: 'Miền nam', value: 'MIEN-NAM' }
    ];

    return (
        <form className='max-w-3xl mx-auto' onSubmit={onSubmit}>
            <Box className='flex gap-x-10 mb-5'>
                <Box className='w-1/2'>
                    <CoreInput control={control} name='name' label='Tên cửa hàng' />
                </Box>
                <Box className='w-1/2'>
                    <CoreAutoComplete
                        control={control}
                        name='area'
                        legendLabel='Khu vực'
                        options={areaOptions}
                        returnValueType='enum'
                    />
                </Box>
            </Box>
            <CoreInput control={control} name='address' label='Địa chỉ cửa hàng' className='mb-3' />
            <CoreInput control={control} name='link_map' label='Link google map' className='mb-3' />
            <Box className='flex items-center gap-x-3 justify-end'>
                <Button
                    variant='contained'
                    color='info'
                    onClick={() => navigate(CMS_ROUTERS.showRoom.list)}
                >
                    Quay lại
                </Button>
                <LoadingButton variant='contained' color='primary' type='submit'>
                    {isEdit ? 'Lưu chỉnh sửa' : 'Thêm cửa hàng'}
                </LoadingButton>
            </Box>
        </form>
    );
};

export default ShowRoomForm;
