import React from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { pickBy } from 'lodash';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage } from '@Core/Helper/Message';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup';

const EvaluateFilter = () => {
    const { evaluateTableHandler } = usePageContext();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            user_email: '',
            productId: '',
            stars: '',
            display: ''
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            data = pickBy(data, v => v !== '');
            await evaluateTableHandler.handleFetchData(data);
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <Box className='mb-6 rounded-md bg-gray-100 p-6'>
            <form onSubmit={onSubmit}>
                <Box className='flex items-center gap-x-10 mb-3'>
                    <CoreInput
                        control={control}
                        name='user_email'
                        size='small'
                        label='Email người đánh giá'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                    <CoreInput
                        control={control}
                        name='productId'
                        size='small'
                        label='ID sản phẩm'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                </Box>
                <Box className='flex items-center gap-x-10'>
                    <Box className='w-1/2'>
                        <CoreAutoComplete
                            control={control}
                            name='stars'
                            size='small'
                            label='Số điện thoại'
                            className='bg-white rounded-md'
                            options={[
                                { label: 'Một sao', value: 1 },
                                { label: 'Hai sao', value: 2 },
                                { label: 'Ba sao', value: 3 },
                                { label: 'Bốn sao', value: 4 },
                                { label: 'Năm sao', value: 5 }
                            ]}
                            placeholder='Số sao đánh giá'
                            returnValueType='enum'
                        />
                    </Box>
                    <Box className='w-1/2 flex justify-between'>
                        <CoreRadioGroup
                            control={control}
                            name='display'
                            options={[
                                { label: 'Ẩn', value: 0 },
                                { label: 'Hiện', value: 1 }
                            ]}
                            row
                        />
                        <Button variant='contained' type='submit'>
                            Tìm kiếm
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default EvaluateFilter;
