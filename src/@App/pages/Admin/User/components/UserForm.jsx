import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Yup from '@Core/Helper/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import CoreInput from '@Core/components/Input/CoreInput';
import CoreInputFile from '@Core/components/Input/CoreInputFile';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { userService } from '@App/services/userService';
import { CMS_ROUTERS } from '@App/configs/constants';

const UserForm = props => {
    const { user, isEdit } = props;
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { isDirty, isSubmitting }
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            id: user?._id ?? null,
            name: user?.name ?? '',
            email: user?.email ?? '',
            phone: user?.phone ?? '',
            password: user?.password ?? '',
            avatar: user?.avatar ?? ''
        },
        resolver: yupResolver(
            Yup.object({
                name: Yup.string().trim().required('Tên người dùng là bắt buộc'),
                email: Yup.string()
                    .trim()
                    .email('Email không đúng định dạng')
                    .required('Email người dùng là bắt buộc'),
                phone: Yup.string().trim().required('Số điện thoại là bắt buộc'),
                password: !isEdit ? Yup.string().password().required('Mật khẩu là bắt buộc') : null
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            const formData = new FormData();
            formData.append('id', data?.id);
            formData.append('name', data?.name);
            formData.append('avatar', data?.avatar);
            formData.append('email', data?.email);
            formData.append('phone', data?.phone);
            formData.append('password', data?.password);

            if (isEdit) {
                await userService.update(formData, data?.id);
            } else {
                await userService.save(formData);
            }

            navigate(CMS_ROUTERS.user.list);
            successMessage(isEdit ? 'Sửa người dung thành công' : 'Thêm người dùng thành công');
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <form className='max-w-3xl mx-auto' onSubmit={onSubmit}>
            <Box className='flex gap-x-10 mb-5'>
                <Box className='w-1/2'>
                    <CoreInput control={control} name='name' label='Tên người dùng' />
                </Box>
                <Box className='w-1/2'>
                    <CoreInput control={control} name='email' label='Email người dùng' />
                </Box>
            </Box>
            <Box className='flex gap-x-10 mb-5'>
                <Box className='w-1/2'>
                    <CoreInput control={control} name='phone' label='Số điện thoại' />
                </Box>
                <Box className='w-1/2'>
                    <CoreInput
                        control={control}
                        name='password'
                        label='Mật khẩu'
                        type='password'
                        disabled={isEdit}
                        className={isEdit ? 'bg-gray-300' : ''}
                    />
                </Box>
            </Box>
            <Box className='mb-5'>
                <Typography>Ảnh đại diện</Typography>
                <CoreInputFile control={control} name='avatar' isPreview />
            </Box>
            <Box className='flex items-center gap-x-3 justify-end'>
                <Button
                    variant='contained'
                    color='info'
                    onClick={() => navigate(CMS_ROUTERS.user.list)}
                >
                    Quay lại
                </Button>
                <LoadingButton
                    variant='contained'
                    color='primary'
                    type='submit'
                    loading={isSubmitting}
                    disabled={!isDirty}
                    className={!isDirty ? 'bg-gray-300' : ''}
                >
                    {isEdit ? 'Lưu chỉnh sửa' : 'Thêm người dùng'}
                </LoadingButton>
            </Box>
        </form>
    );
};

export default UserForm;
