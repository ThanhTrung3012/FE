import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Yup from '@Core/Helper/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { blogCategoryService } from '@App/services/blogCategoryService';
import { CMS_ROUTERS } from '@App/configs/constants';

const BlogCategoryForm = props => {
    const { blogCategory, isEdit } = props;
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty }
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            id: blogCategory?._id ?? null,
            name: blogCategory?.name ?? ''
        },
        resolver: yupResolver(
            Yup.object({
                name: Yup.string().trim().required('Tên danh mục là bắt buộc')
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            await blogCategoryService.save(data);
            navigate(CMS_ROUTERS.blogCategory.list);
            successMessage(isEdit ? 'Sửa danh mục thành công' : 'Thêm danh mục thành công');
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <form className='max-w-3xl mx-auto' onSubmit={onSubmit}>
            <CoreInput control={control} name='name' label='Tên danh mục' />
            <Box className='flex items-center gap-x-3 justify-end mt-6'>
                <Button
                    variant='contained'
                    color='info'
                    onClick={() => navigate(CMS_ROUTERS.category.list)}
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
                    {isEdit ? 'Lưu chỉnh sửa' : 'Thêm danh mục'}
                </LoadingButton>
            </Box>
        </form>
    );
};

export default BlogCategoryForm;
