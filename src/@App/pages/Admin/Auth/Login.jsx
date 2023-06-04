import React from 'react';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import CoreInput from '@Core/components/Input/CoreInput';
import { authService } from '@App/services/authService';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { setSession } from '@Core/Helper/Session';
import { CMS_ROUTERS } from '@App/configs/constants';

const Login = () => {
    const navigate = useNavigate()

    const {
        handleSubmit,
        control,
        formState: { isLoading, isDirty }
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {   
            const res = await authService.login(data);

            setSession('one_way_user', 'local', res?.user);
            Cookie.set('token', res?.token);
            successMessage('Đăng nhập thành công');
            navigate(CMS_ROUTERS.doashboard)
        } catch (error) {
            console.log('====== error: ' + error);
            errorMessage('Sai tên tài khoản hoặc mật khẩu');
        }
    });

    return (
        <Box className='flex justify-center h-screen items-center '>
            <Box component={Paper} className='w-[40%] mx-auto p-10'>
                <Typography className='text-center' component='h1' variant='h1'>
                    Đăng nhập
                </Typography>
                <form onSubmit={onSubmit} className='mt-10'>
                    <Box className='mb-6'>
                        <Typography variant='subtitle1'>Email</Typography>
                        <CoreInput control={control} name='email' />
                    </Box>
                    <Box className='mb-6'>
                        <Typography variant='subtitle1'>Mật khẩu</Typography>
                        <CoreInput control={control} name='password' type='password' />
                    </Box>
                    <LoadingButton
                        type='submit'
                        variant='contained'
                        fullWidth
                        disabled={!isDirty}
                        className={!isDirty ? 'bg-gray-500' : ''}
                        size='large'
                    >
                        Đăng nhập
                    </LoadingButton>
                </form>
            </Box>
        </Box>
    );
};

export default Login;
