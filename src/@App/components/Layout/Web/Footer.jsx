import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const Footer = () => {
    const contacts = [
        { label: 'Giới thiệu công ty', path: '/' },
        { label: 'Hệ thống cửa hàng ', path: '/' },
        { label: 'Liên hệ với chúng tôi', path: '/' }
    ];

    const policies = [
        { label: 'Chính sách mua hàng', path: '/' },
        { label: 'Chính sách bảo hành', path: '/' },
        { label: 'Chính sách vận chuyển', path: '/' }
    ];

    const infos = [
        { label: 'Giải đáp mua hàng Online', path: '/' },
        { label: 'Phương thức thanh toán', path: '/' },
        { label: 'Tuyển dụng', path: '/' }
    ];

    return (
        <div className='shadow-xl bg-white mt-10 py-6'>
            <div className='w-[1320px] mx-auto'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold'>Thông tin liên hệ</h3>
                        {contacts.map((contact, index) => (
                            <Link to={contact.path}>{contact.label}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold'>Chính sách</h3>
                        {policies.map((policy, index) => (
                            <Link to={policy.path}>{policy.label}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold'>Thông tin khác</h3>
                        {infos.map((info, index) => (
                            <Link to={info.path}>{info.label}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold text-right'>Bản quyền</h3>
                        <div className='flex items-center gap-1'>
                            <img
                                width='150'
                                height='150'
                                src='https://onewaymobile.vn/images/config/c52a1034a68361dd3892_1666686156.jpg'
                                alt=''
                            />
                            <img
                                width='150'
                                height='150'
                                src='https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=a4a4082e-9abb-4c46-950a-061c53ec6181'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-6 pt-4 border-t-[1px] flex justify-between items-center border-gray-400 '>
                    <p className='text-gray-500 text-lg'>
                        Copyright © 2022 - Bản quyền thuộc về Đỗ Thành Trung.
                    </p>
                    <div className='flex items-center gap-x-3'>
                        <FacebookIcon color='orange' />
                        <YouTubeIcon color='orange' />
                        <InstagramIcon color='orange' />
                        <GoogleIcon color='orange' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
