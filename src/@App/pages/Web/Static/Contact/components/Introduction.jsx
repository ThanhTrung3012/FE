import React from 'react';
import teamImg from '@App/assets/team.jpeg';

const Introduction = () => {
    return (
        <div>
            <img src={teamImg} className='h-[800px] w-full object-cover' />
            <div className='mt-10 pb-10'>
                <div className='relative mb-10'>
                    <h2 className='text-center pb-2 text-[32px] font-bold'>GIỚI THIỆU CÔNG TY</h2>
                    <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
                </div>
                <p className='text-18 md:p-10 p-0'>
                    Trải qua nhiều năm hoạt động, Oneway hiện nay được biết đến như 1 đơn vị dẫn đầu
                    trong ngành bán lẻ Điện thoại di động – Máy Tính bảng – Macbook - Phụ kiện Công
                    nghệ Qua sử dụng/Mới tại thị trường Hà Nội nói riêng cũng như trên toàn quốc.
                    Thương hiệu Oneway được bảo hộ bởi CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ DỊCH VỤ ONEWAY
                    VIỆT NAM.
                </p>
            </div>
        </div>
    );
};

export default Introduction;
