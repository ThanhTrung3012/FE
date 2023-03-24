import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Yup from '@Core/Helper/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { pickBy } from 'lodash';
import { useNavigate } from 'react-router-dom';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { categoryService } from '@App/services/categoryService';
import { CMS_ROUTERS } from '@App/configs/constants';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';
import useCategoryOptions from '../hooks/useCategoryOptions';

const CategoryForm = props => {
    const { category, isEdit } = props;
    const navigate = useNavigate();
    const { categoryOptions, loading } = useCategoryOptions();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty }
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            id: category?._id ?? null,
            name: category?.name ?? '',
            parent_id: category?.parent_id ?? null,
            icon_url: category?.icon_url ?? null
        },
        resolver: yupResolver(
            Yup.object({
                name: Yup.string().trim().required('Tên người dùng là bắt buộc')
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            const newData = pickBy(data, v => v !== null);
            await categoryService.save(newData);
            navigate(CMS_ROUTERS.category.list);
            successMessage(isEdit ? 'Sửa loại thành công' : 'Thêm loại thành công');
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <form className='max-w-3xl mx-auto' onSubmit={onSubmit}>
            <Box className='flex gap-x-10 mb-5'>
                <Box className='w-1/2'>
                    <CoreInput control={control} name='name' label='Tên loại sản phẩm' />
                </Box>
                <Box className='w-1/2'>
                    <CoreAutoComplete
                        control={control}
                        name='parent_id'
                        legendLabel='Cấp cha'
                        options={categoryOptions}
                        labelPath='name'
                        valuePath='_id'
                        returnValueType='enum'
                        loading={loading}
                    />
                </Box>
            </Box>
            <CoreInput control={control} name='icon_url' label='Link icon' className='mb-3' />
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
                    {isEdit ? 'Lưu chỉnh sửa' : 'Thêm loại sản phẩm'}
                </LoadingButton>
            </Box>
        </form>
    );
};

export default CategoryForm;
