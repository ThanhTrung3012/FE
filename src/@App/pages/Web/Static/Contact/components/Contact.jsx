import React from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CoreInput from '@Core/components/Input/CoreInput';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import { contactService } from '@App/services/contactService';

const CoreInputStyles = styled(CoreInput)(({ theme }) => {
    return {
        '& .MuiOutlinedInput-notchedOutline ': {
            borderRadius: '12px !important'
        }
    };
});

const Contact = () => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm({
        defaultValues: {
            user_name: '',
            user_address: '',
            user_email: '',
            user_phone: '',
            content: ''
        },
        resolver: yupResolver(
            Yup.object({
                user_name: Yup.string().trim().required('Tên là bắt buộc'),
                user_address: Yup.string().trim().required('Địa chỉ là bắt buộc'),
                user_email: Yup.string()
                    .trim()
                    .email('Email không hợp lệ')
                    .required('Email là bắt buộc'),
                user_phone: Yup.string().trim().required('Số điện thoại là bắt buộc'),
                content: Yup.string().trim().required('Nội dung là bắt buộc')
            })
        )
    });

    const onSubmit = handleSubmit(async data => {
        try {
            await contactService.create(data)
            successMessage('Gửi liên hệ thành công chúng tôi sẽ sớm liên hệ với bạn!')
            reset()
        } catch (error) {
            errorMessage(error);
        }
    });

    return (
        <div className='p-10'>
            <div className='relative'>
                <h1 className='text-center text-[32px] font-bold'>Liên hệ với chúng tôi</h1>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='flex justify-around gap-5 mt-10'>
                <div className='text-center'>
                    <div className='w-[80px] h-[80px] grid place-content-center mx-auto shadow-lg rounded-full mb-3'>
                        <PlaceOutlinedIcon className='text-[#EF6837]' fontSize='large' />
                    </div>
                    <h3 className='font-bold'>Địa chỉ liên hệ</h3>
                    <p> 66 Thái Hà - P.Trung Liệt - Q.Đống Đa - TP.Hà Nội</p>
                </div>
                <div className='text-center'>
                    <div className='w-[80px] h-[80px] grid place-content-center mx-auto shadow-lg rounded-full mb-3'>
                        <PlaceOutlinedIcon className='text-[#EF6837]' fontSize='large' />
                    </div>
                    <h3 className='font-bold'>Tổng đài</h3>
                    <p>0987954221</p>
                </div>
                <div className='text-center'>
                    <div className='w-[80px] h-[80px] grid place-content-center mx-auto shadow-lg rounded-full mb-3'>
                        <PlaceOutlinedIcon className='text-[#EF6837]' fontSize='large' />
                    </div>
                    <h3 className='font-bold'>Giờ làm việc</h3>
                    <p>8h15 - 22h tất cả các ngày trong tuần (cả ngày lễ)</p>
                </div>
                <div className='text-center'>
                    <div className='w-[80px] h-[80px] grid place-content-center mx-auto shadow-lg rounded-full mb-3'>
                        <PlaceOutlinedIcon className='text-[#EF6837]' fontSize='large' />
                    </div>
                    <h3 className='font-bold'>Email liên hệ</h3>
                    <p>nghiemmanhcuong198@gmail.com</p>
                </div>
            </div>
            <p className='mt-20 text-17 mb-5'>
                Cảm ơn bạn đã quan tâm đến sản phẩm và dịch vụ của Oneway, vui lòng gửi liên hệ theo
                mẫu phản hồi bên dưới, chúng tôi sẽ sớm liên hệ lại với bạn.
            </p>
            <form onSubmit={onSubmit}>
                <div class='flex gap-5 mb-5'>
                    <CoreInputStyles control={control} name='user_name' placeholder='Họ và tên' />
                    <CoreInputStyles control={control} name='user_address' placeholder='Địa chỉ' />
                </div>
                <div class='flex gap-5 mb-5'>
                    <CoreInputStyles
                        control={control}
                        name='user_phone'
                        placeholder='Số điện thoại'
                    />
                    <CoreInputStyles control={control} name='user_email' placeholder='Email' />
                </div>
                <CoreInputStyles
                    control={control}
                    name='content'
                    multiline
                    minRows={7}
                    placeholder='Nội dung'
                />
                <div className='mt-5'>
                    <LoadingButton
                        variant='contained'
                        color='orange'
                        className='w-full py-3 text-18'
                        type='submit'
                        loading={isSubmitting}
                        sx={{ color: 'white !important', borderRadius: '12px !important' }}
                    >
                        Gửi liên hệ
                    </LoadingButton>
                </div>
            </form>
        </div>
    );
};

export default Contact;
