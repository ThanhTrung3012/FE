import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { WEB_ROUTERS } from '@App/configs/constants';

const Footer = () => {
    const contacts = [
        { label: 'Giới thiệu công ty', path: WEB_ROUTERS.staticPage.contact.introduction },
        { label: 'Hệ thống cửa hàng ', path: WEB_ROUTERS.staticPage.contact.shops },
        { label: 'Liên hệ với chúng tôi', path: WEB_ROUTERS.staticPage.contact.contact }
    ];

    const policies = [
        { label: 'Chính sách mua hàng', path: WEB_ROUTERS.staticPage.policy.purchase },
        { label: 'Chính sách bảo hành', path: WEB_ROUTERS.staticPage.policy.guarantee },
        { label: 'Chính sách vận chuyển', path: WEB_ROUTERS.staticPage.policy.transport }
    ];

    const infos = [
        { label: 'Giải đáp mua hàng Online', path: WEB_ROUTERS.staticPage.info.question },
        { label: 'Phương thức thanh toán', path: WEB_ROUTERS.staticPage.info.payment },
        { label: 'Tuyển dụng', path: WEB_ROUTERS.staticPage.info.recruitment }
    ];

    return (
        <div className='shadow-xl bg-white mt-10 py-6 lg:px-0 px-[10px]' style={{boxShadow: '0 -5px 5px -5px rgba(0,0,0,0.1)'}}>
            <div className='w-full lg:w-[1320px] mx-auto'>
                <div className='flex justify-between lg:flex-row flex-col lg:gap-0 gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold'>Thông tin liên hệ</h3>
                        {contacts.map((contact, index) => (
                            <Link key={index} to={contact.path}>{contact.label}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold'>Chính sách</h3>
                        {policies.map((policy, index) => (
                            <Link key={index} to={policy.path}>{policy.label}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold'>Thông tin khác</h3>
                        {infos.map((info, index) => (
                            <Link key={index} to={info.path}>{info.label}</Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='mb-2 font-bold text-left lg:mt-0 mt-5 lg:text-right'>Bản quyền</h3>
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
                <div className='mt-6 pt-4 border-t-[1px] flex justify-between lg:flex-row flex-col gap-3 items-center border-gray-400 '>
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
