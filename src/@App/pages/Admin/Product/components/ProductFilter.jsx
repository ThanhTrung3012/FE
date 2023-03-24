import React from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { pickBy } from 'lodash';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage } from '@Core/Helper/Message';
import useCategoryOptions from '../hooks/useCategoryOptions';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';

const ProductFilter = () => {
    const { productTableHandler } = usePageContext();
    const { categoryOptions, loading } = useCategoryOptions();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            category: ''
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            data = pickBy(data, v => v !== '');
            await productTableHandler.handleFetchData(data);
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <Box className='mb-6 rounded-md bg-gray-100 p-6'>
            <form onSubmit={onSubmit}>
                <Box className='flex items-center gap-x-10'>
                    <Box className='w-[40%]'>
                        <CoreInput
                            control={control}
                            name='name'
                            size='small'
                            label='Tên sản phẩm'
                            className='bg-white rounded-md'
                            isOutlined
                        />
                    </Box>
                    <Box className='w-[40%]'>
                        <CoreAutoComplete
                            control={control}
                            name='category'
                            options={categoryOptions}
                            labelPath='name'
                            valuePath='_id'
                            returnValueType='enum'
                            loading={loading}
                            size='small'
                            className='bg-white'
                            placeholder='Loại sản phẩm'
                        />
                    </Box>
                    <Box className='w-[20%] flex justify-end'>
                        <Button variant='contained' type='submit'>
                            Tìm kiếm
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default ProductFilter;
