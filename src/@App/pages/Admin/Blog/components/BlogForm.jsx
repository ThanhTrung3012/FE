import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Yup from '@Core/Helper/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import CoreInput from '@Core/components/Input/CoreInput';
import CoreInputFile from '@Core/components/Input/CoreInputFile';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { getOneWayUser } from '@Core/Helper/Session';
import { blogService } from '@App/services/blogService';
import { CMS_ROUTERS } from '@App/configs/constants';
import CoreCheckBox from '@Core/components/Input/CoreCheckBox';
import useCategories from '../hooks/useCategories';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';

const BlogForm = props => {
    const user = getOneWayUser()
    const { blog, isEdit } = props;
    const { categories, loading } = useCategories();
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { isDirty, isSubmitting }
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            id: blog?._id ?? null,
            title: blog?.title ?? '',
            description: blog?.description ?? '',
            content: blog?.content ?? '',
            blog_category: blog?.blog_category ?? '',
            author: blog?.author ?? '',
            isPopular: blog?.isPopular ?? '',
            image: blog?.image ?? ''
        },
        resolver: yupResolver(
            Yup.object({
                title: Yup.string().trim().required('Tiêu đề bài viết là bắt buộc'),
                description: Yup.string().trim().required('Mô tả bài viết là bắt buộc'),
                content: Yup.string().trim().required('Nội dung bài viết là bắt buộc'),
                // image: Yup.string().required('Ảnh bài viết là bắt buộc'),
                blog_category: Yup.string().required('Danh mục bài viết là bắt buộc'),
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            const formData = new FormData();
            formData.append('id', data?.id);
            formData.append('title', data?.title);
            formData.append('description', data?.description);
            formData.append('content', data?.content);
            formData.append('blog_category', data?.blog_category);
            formData.append('author',user?.name);
            formData.append('isPopular',data?.isPopular ? 1 : 0);
            formData.append('image',data?.image);
            if (isEdit) {
                await blogService.update(formData, data?.id);
            } else {
                await blogService.save(formData);
            }
            navigate(CMS_ROUTERS.blog.list);
            successMessage(isEdit ? 'Sửa bài viết thành công' : 'Thêm bài viết thành công');
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <form className='max-w-3xl mx-auto' onSubmit={onSubmit}>
            <CoreInput control={control} name='title' label='Tiêu đề bài viết' className='mb-3' />
            <CoreInput
                control={control}
                name='description'
                label='Mô tả bài viết'
                multiline
                className='mb-3'
            />
            <CoreInput
                control={control}
                name='content'
                label='Nội dung bài viết'
                multiline
                className='mb-3'
            />
            <Box className='mb-5 flex items-start gap-x-20'>
                <Box className='w-1/2'>
                    <Typography>Ảnh bài viết</Typography>
                    <CoreInputFile control={control} name='image' isPreview />
                </Box>
                <Box className='w-1/2'>
                    <CoreAutoComplete
                        control={control}
                        name='blog_category'
                        options={categories}
                        loading={loading}
                        labelPath='name'
                        valuePath='_id'
                        returnValueType='enum'
                        legendLabel='Danh mục bài viết'
                        className='mb-3'
                    />
                    <CoreCheckBox control={control} label='Bài viết nổi bật' name='isPopular' />
                </Box>
            </Box>
            <Box className='flex items-center gap-x-3 justify-end'>
                <Button
                    variant='contained'
                    color='info'
                    onClick={() => navigate(CMS_ROUTERS.blog.list)}
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
                    {isEdit ? 'Lưu chỉnh sửa' : 'Thêm bài viết'}
                </LoadingButton>
            </Box>
        </form>
    );
};

export default BlogForm;
