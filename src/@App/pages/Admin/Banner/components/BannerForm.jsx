import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Yup from '@Core/Helper/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { pickBy } from 'lodash';
import { useNavigate } from 'react-router-dom';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { bannerService } from '@App/services/bannerService';
import { CMS_ROUTERS } from '@App/configs/constants';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';
import useProductCategories from '../hooks/useProductCategories';
import useProductsList from '../hooks/useProductsList';
import CoreInputFile from '@Core/components/Input/CoreInputFile';
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup';

const BannerForm = props => {
    const { banner, isEdit } = props;
    const navigate = useNavigate();
    const { categories } = useProductCategories();
    const { products } = useProductsList();
    const [linkOptions, setLinkOptions] = useState([]);

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty },
        watch
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            id: banner?._id ?? null,
            image: banner?.image ?? '',
            category: banner?.category ?? null,
            title: banner?.title ?? null,
            path: banner?.path ?? null,
            display: banner?.display ?? null
        },
        resolver: yupResolver(
            Yup.object({
                category: Yup.string()
                    .trim()
                    .typeError('Loại là bắt buộc')
                    .required('Loại là bắt buộc'),
                path: Yup.string()
                    .trim()
                    .typeError('Liên kết là bắt buộc')
                    .required('Liên kết là bắt buộc'),
                // image: Yup.string().required('Ảnh là bắt buộc'),
                display: Yup.number()
                    .typeError('Hiển thị là bắt buộc')
                    .required('Hiển thị là bắt buộc')
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            const formData = new FormData();
            formData.append('image', data?.image);
            formData.append('category', Number(data?.category));
            if (data?.title) formData.append('title', data?.title);
            formData.append('path', data?.path);
            formData.append('display', Number(data?.display));

            if (isEdit) {
                await bannerService.update(formData, data?.id);
            } else {
                await bannerService.save(formData);
            }
            navigate(CMS_ROUTERS.banner.list);
            successMessage(isEdit ? 'Sửa banner thành công' : 'Thêm banner thành công');
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    const options = [
        { label: 'Sản phẩm', value: 1 },
        { label: 'Loại sản phẩm', value: 2 }
    ];

    const popularOptions = [
        { label: 'Hot', value: 1 },
        { label: 'Nổi bật', value: 2 },
        { label: 'Hiển thị trên slide', value: 3 }
    ];

    useEffect(() => {
        if (watch('category')) {
            if (watch('category') == 1) {
                setLinkOptions(products);
            }else {
                setLinkOptions(categories);
            }
        }
    }, [watch('category'),categories,products]);

    return (
        <form className='max-w-3xl mx-auto' onSubmit={onSubmit}>
            <Box className='flex gap-x-10 mb-5'>
                <Box className='w-1/2'>
                    <CoreAutoComplete
                        control={control}
                        name='category'
                        legendLabel='Loại'
                        options={options}
                        returnValueType='enum'
                    />
                </Box>
                <Box className='w-1/2'>
                    <CoreAutoComplete
                        control={control}
                        name='path'
                        legendLabel='Liên kết'
                        options={linkOptions}
                        labelPath='name'
                        valuePath='_id'
                        returnValueType='enum'
                    />
                </Box>
            </Box>
            <CoreInput control={control} name='title' label='Tiêu đề' />
            <Box className='mb-5 mt-5'>
                <Typography>Ảnh banner</Typography>
                <CoreInputFile control={control} name='image' isPreview />
            </Box>
            <CoreRadioGroup options={popularOptions} row control={control} name='display' />
            <Box className='flex items-center gap-x-3 justify-end'>
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
                    {isEdit ? 'Lưu chỉnh sửa' : 'Thêm banner sản phẩm'}
                </LoadingButton>
            </Box>
        </form>
    );
};

export default BannerForm;
