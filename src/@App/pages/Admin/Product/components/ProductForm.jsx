import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Yup from '@Core/Helper/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { productService } from '@App/services/productService';
import { CMS_ROUTERS } from '@App/configs/constants';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';
import useCategoryOptions from '../hooks/useCategoryOptions';
import CoreInputFile from '@Core/components/Input/CoreInputFile';
import ProductColors from '../dialogs/ProductColors';
import ProductOptions from '../dialogs/ProductOptions';
import ProductParameters from '../dialogs/ProductParameters';
import CoreCheckBox from '@Core/components/Input/CoreCheckBox';

const ProductForm = props => {
    const [type, setType] = useState(null);
    const { product, isEdit } = props;
    const { categoryOptions, loading } = useCategoryOptions();
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty, errors }
    } = useForm({
        mode: 'onTouched',
        defaultValues: {
            id: product?._id ?? null,
            name: product?.name ?? '',
            price: product?.price ?? '',
            category: product?.category ?? '',
            discount: product?.discount ?? '',
            description: product?.description ?? '',
            images: product?.images ?? [],
            colors: product?.colors ?? [],
            options: product?.options ?? [],
            parameters: product?.parameters ?? [],
            isPopular: product?.isPopular ?? false,
            isHot: product?.isHot ?? false
        },
        resolver: yupResolver(
            Yup.object({
                name: Yup.string().trim().required('Tên sản phẩm là bắt buộc'),
                price: Yup.string()
                    .trim()
                    .required('Giá trung bình sản phẩm là bắt buộc')
                    .matches(/^[1-9][0-9]*$/, 'Giá trung bình sản phẩm không hợp lệ'),
                category: Yup.string().trim().required('Loại sản phẩm là bắt buộc'),
                discount: Yup.string().matches(/^(?:100|[1-9]?\d|0)$/, 'Khuyến mãi không hợp lệ'),
                images: !isEdit
                    ? Yup.array()
                          .min(1, 'Ảnh sản phẩm là bắt buộc')
                          .max(3, 'Không được chọn quá 3 ảnh')
                    : null,
                colors: Yup.array().of(
                    Yup.object().shape({
                        title: Yup.string().trim().required('Tên màu là bắt buộc'),
                        price: Yup.string()
                            .required('Giá là bắt buộc')
                            .matches(/^[0-9]\d*(\.\d+)?$/, 'Giá không hợp lệ')
                    })
                ),
                options: Yup.array().of(
                    Yup.object().shape({
                        title: Yup.string().trim().required('Tên lựa chọn là bắt buộc'),
                        price: Yup.string()
                            .required('Giá là bắt buộc')
                            .matches(/^[0-9]\d*(\.\d+)?$/, 'Giá không hợp lệ')
                    })
                ),
                parameters: Yup.array().of(
                    Yup.object().shape({
                        title: Yup.string().trim().required('Tên thông số là bắt buộc'),
                        value: Yup.string().trim().required('Thông số là bắt buộc')
                    })
                )
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            const formData = new FormData();
            formData.append('id', data?.id);
            formData.append('name', data?.name);
            formData.append('price', data?.price);
            formData.append('category', data?.category);
            formData.append('discount', data?.discount);
            formData.append('description', data?.description);
            formData.append('isPopular', data?.isPopular);
            formData.append('isHot', data?.isHot);
            if (data?.images) {
                for (const image of data?.images) {
                    formData.append('images[]', image);
                }
            }

            for (const color of data?.colors) {
                formData.append('colors[]', JSON.stringify(color));
            }

            for (const option of data?.options) {
                formData.append('options[]', JSON.stringify(option));
            }

            for (const parameter of data?.parameters) {
                formData.append('parameters[]', JSON.stringify(parameter));
            }

            if (isEdit) {
                await productService.update(formData, data?.id);
            } else {
                await productService.create(formData);
            }
            navigate(CMS_ROUTERS.product.list);
            successMessage(isEdit ? 'Sửa sản phẩm thành công' : 'Thêm sản phẩm thành công');
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <FormProvider control={control} errors={errors}>
            <form className='max-w-3xl mx-auto' onSubmit={onSubmit}>
                <CoreInput control={control} name='name' label='Tên sản phẩm' className='mb-3' />
                <CoreInput control={control} name='price' label='Giá trung bình' className='mb-3' />
                <Box className='flex gap-x-10 mb-5'>
                    <Box className='w-1/2'>
                        <CoreInput control={control} name='discount' label='Giảm giá(%)' />
                    </Box>
                    <Box className='w-1/2'>
                        <CoreAutoComplete
                            control={control}
                            name='category'
                            legendLabel='Danh mục'
                            options={categoryOptions}
                            labelPath='name'
                            valuePath='_id'
                            returnValueType='enum'
                            loading={loading}
                        />
                    </Box>
                </Box>
                <CoreInput
                    control={control}
                    name='description'
                    label='Mô tả sản phẩm'
                    multiline
                    className='mb-3'
                />
                <Box className='mb-3'>
                    <Typography>Ảnh sản phẩm(Có thể chọn nhiều ảnh)</Typography>
                    <CoreInputFile
                        control={control}
                        name='images'
                        multiple
                        images={product?.images}
                        isPreview={isEdit}
                    />
                </Box>
                <Box className='mb-5 flex items-center gap-x-3'>
                    <Button variant='contained' onClick={() => setType('color')}>
                        Thêm màu
                    </Button>
                    <Button variant='contained' onClick={() => setType('option')}>
                        Thêm lựa chọn
                    </Button>
                    <Button variant='contained' onClick={() => setType('parameter')}>
                        Thêm thông số
                    </Button>
                </Box>
                <Box className='flex items-center gap-x-10 mb-5'>
                    <CoreCheckBox control={control} name='isPopular' label='Sản phẩm nổi bật' />
                    <CoreCheckBox control={control} name='isHot' label='Sản phẩm hot' />
                </Box>
                <Box className='flex items-center gap-x-3 justify-end'>
                    <Button
                        variant='contained'
                        color='info'
                        onClick={() => navigate(CMS_ROUTERS.product.list)}
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
                        {isEdit ? 'Lưu chỉnh sửa' : 'Thêm sản phẩm'}
                    </LoadingButton>
                </Box>
            </form>
            {type === 'color' ? <ProductColors open={true} setType={setType} /> : null}
            {type === 'option' ? <ProductOptions open={true} setType={setType} /> : null}
            {type === 'parameter' ? <ProductParameters open={true} setType={setType} /> : null}
        </FormProvider>
    );
};

export default ProductForm;
