import React from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { pickBy } from 'lodash';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage } from '@Core/Helper/Message';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreCheckBox from '@Core/components/Input/CoreCheckBox';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';
import useCategories from '../hooks/useCategories';

const BlogFilter = () => {
    const { blogTableHandler } = usePageContext();
    const { categories, loading } = useCategories();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            title: '',
            author: '',
            isPopular: '',
            blog_category: ''
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            data = pickBy(data, v => v !== '');
            if (data.isPopular) {
                data.isPopular = 1;
            } else {
                delete data.isPopular;
            }
            await blogTableHandler.handleFetchData(data);
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
                        name='title'
                        size='small'
                        label='Tiêu đề'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                    <CoreInput
                        control={control}
                        name='author'
                        size='small'
                        label='Tác giả'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                </Box>
                <Box className='flex items-center gap-x-10'>
                    <Box className='w-1/2'>
                        <CoreAutoComplete
                            control={control}
                            name='blog_category'
                            options={categories}
                            loading={loading}
                            labelPath='name'
                            valuePath='_id'
                            returnValueType='enum'
                            size='small'
                            className='bg-white'
                            placeholder='Danh mục bài viết'
                        />
                    </Box>
                    <Box className='w-1/2 flex justify-between'>
                        <CoreCheckBox control={control} name='isPopular' label='Nổi bật' />
                        <Button variant='contained' type='submit'>
                            Tìm kiếm
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default BlogFilter;
