import React, { useEffect } from 'react';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import LeftMenu from './components/LeftMenu';
import moment from 'moment';

const BlogDetail = () => {
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);
    const blog = {
        date: new Date(),
        category: 'Tin mới',
        title: 'Top 8 smartphone giá tốt đang được giảm sốc tại Oneway mùa hè này!',
        image: 'https://onewaymobile.vn/upload_images/images/2023/05/26/iPhone-14-Pro-Max-Oneway.png',
        content:
            'iPhone 14 Pro Max là phiên bản cao cấp nhất trong dòng sản phẩm iPhone 14 của Apple. Với chip xử lý A16 Bionic, màn hình OLED 6,7 inch Super Retina XDR tần số quét 120hz, Camera đa năng, dung lượng pin lớn và nhiều tính năng mới đi kèm, đây là một trong những sản phẩm được khách hàng săn đón nhiều nhất năm 2023.iPhone 14 Pro là phiên bản cao cấp của dòng sản phẩm iPhone 14 của Apple. Với chip xử lý A16 Bionic, màn hình OLED 6,1 Inch Super Retina XDR 120hz, Camera đa năng, dung lượng pin lớn và nhiều tính năng mới. Đây là chiếc Smartphone dành cho những người dùng ưu tiên hiệu năng xử lý nhưng màn hình không quá lớn như iPhone 14 Pro Max.iPhone 13 Pro Max là chiếc điện thoại đầu tiên của Apple được trang bị màn hình 120Hz, đi kèm cụm 3 camera chất lượng cao với chế độ Cinematic giúp chụp ảnh/quay video 4K sắc nét và cấu hình A15 Bionic mạnh mẽ hàng top. Đây vẫn là chiếc smartphone có hiệu năng vô cùng tốt với mức giá rẻ hơn khá nhiều so với dòng iPhone 14 hiện tại.'
    };

    return (
        <div className='flex relative'>
            <div className='h-screen w-2/12'>
                <LeftMenu />
            </div>
            <div className='w-10/12 bg-white p-10 rounded-xl'>
                <div className='flex gap-x-3 items-center mb-5'>
                    <p className='text-20'>{moment(blog?.date).format('YYYY/MM/DD')}</p>
                    <FiberManualRecordRoundedIcon className='text-11 text-[#C4C4C4]' />
                    <p className='text-20 text-[#EF6837]'>{blog?.category}</p>
                </div>
                <h1 className='text-[32px] font-bold'>{blog.title}</h1>
                <img src={blog.image} className="rounded-xl mt-5" />
                <p className='mt-5 text-20'>{blog.content}</p>
            </div>
        </div>
    );
};

export default BlogDetail;
