import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Yup from '@Core/Helper/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { errorMessage, successMessage } from '@Core/Helper/Message';
import { orderService } from '@App/services/orderService';
import { CMS_ROUTERS } from '@App/configs/constants';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';

const BlogCategoryForm = ({ order }) => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty }
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            id: order?._id ?? null,
            status: order?.status ?? ''
        },
        resolver: yupResolver(
            Yup.object({
                status: Yup.string().trim().required('Trạng thái là bắt buộc')
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            await orderService.changeStatus(data);
            navigate(CMS_ROUTERS.order.list);
            successMessage('Sửa trạng thái danh mục thành công');
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    const statusOptions = [
        { label: 'Chờ xác nhận', value: 'chờ xác nhận' },
        { label: 'Xác nhận', value: 'xác nhận' },
        { label: 'Đang vận chuyển', value: 'đang giao' },
        { label: 'Đã giao', value: 'đã giao' }
    ];

    return (
        <form className='max-w-3xl mx-auto' onSubmit={onSubmit}>
            <CoreAutoComplete
                control={control}
                name='status'
                label='Tên danh mục'
                options={statusOptions}
                returnValueType='enum'
            />
            <Box className='flex items-center gap-x-3 justify-end mt-6'>
                <Button
                    variant='contained'
                    color='info'
                    onClick={() => navigate(CMS_ROUTERS.order.list)}
                >
                    Quay lại
                </Button>
                <LoadingButton
                    loading={isSubmitting}
                    variant='contained'
                    type='submit'
                    disabled={!isDirty}
                    className={!isDirty ? 'bg-gray-400 text-white' : ''}
                >
                    Lưu chỉnh sửa
                </LoadingButton>
            </Box>
        </form>
    );
};

export default BlogCategoryForm;
