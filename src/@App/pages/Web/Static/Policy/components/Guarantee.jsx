import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Guarantee = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='p-0 md:p-10'>
            <div className='relative mb-10'>
                <h2 className='text-center pb-2 text-[32px] font-bold'>CHÍNH SÁCH BẢO HÀNH</h2>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='mb-10'>
                <p className='text-18 mb-5'>
                    Xin cảm ơn quý khách hàng đã tin tưởng sử dụng sản phẩm và dịch vụ của Oneway.
                    Trong quá trình phát triển Oneway luôn lấy sự <strong>uy tín</strong>, bảo hành
                    – hậu mãi, tận tâm chu đáo - là yếu tố tiên quyết cho sự phát triển bền vững của
                    công ty. Ngoài các sản phẩm mới được bảo hành theo chính sách riêng của từng
                    hãng.{' '}
                </p>
                <p className='text-18 mb-5'>
                    Thì những sản phẩm do Oneway nhập khẩu, sản phẩm qua sử dụng sẽ được bảo hành
                    theo chính sách bảo hành lên đến 06 tháng tại Oneway. Với chế độ Bảo hành phần
                    cứng lên đến 06 tháng – 30 ngày không lỗi cũng đổi thoải mái, lên đời{' '}
                    <strong>miễn phí </strong>
                    chỉ cần bù thêm chênh lệch, <strong>thích là đổi không cần lý do</strong>. Hy
                    vọng sẽ làm quý khách hài lòng hơn trong quá trình sử dụng sản phẩm tại Oneway.
                </p>
                <p className='mb-3 text-[20px]'>*LƯU Ý KHI BẢO HÀNH:</p>
                <p className='text-18'>
                    – Địa chỉ tiếp nhận bảo hành: Toàn bộ Hệ thống Showroom Oneway
                </p>
            </div>
            <div className='mb-5'>
                <h3 className='text-20 font-bold mb-5'>A. CỤ THỂ ĐỐI VỚI TỪNG SẢN PHẨM </h3>
                <Accordion
                    expanded={expanded === 'panel1'}
                    className='mb-5'
                    sx={{
                        boxShadow: 'none !important',
                        background: '#F5F5F7 !important',
                        padding: '10px 0'
                    }}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-19 font-bold'>
                            1.ĐIỆN THOẠI, MÁY TÍNH BẢNG, MACBOOK, ĐỒNG HỒ THÔNG MINH, PHỤ KIỆN MỚI
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h5 className='mb-3 text-20'>CÁC ĐIỀU KHOẢN BẢO HÀNH CHI TIẾT</h5>
                        <ul className='mt-5'>
                            <li className='text-17 mb-5'>
                                1. Chỉ nhận bảo hành, đổi và nhập lại sản phẩm sau 13h00 hàng ngày
                                (bắt buộc mang theo Phiếu bàn giao hình thức máy).
                            </li>
                            <li className='text-17 mb-5'>
                                <p className='mb-3'>
                                    2. Sản phẩm sẽ được đổi hoặc bảo hành khi đáp ứng đủ điều kiện
                                    Bảo hành số 3-4-5-6 dưới đây.
                                </p>
                                <p className='mb-3'>
                                    Đối với máy mới chưa active (hàng Việt Nam & hàng nhập khẩu),
                                    sản phẩm được bảo hành 12 tháng theo quy định của Trung tâm bảo
                                    hành uỷ quyền tại Việt Nam của Nhà sản xuất.
                                </p>
                                <p>
                                    Đối với các sản phẩm Apple, sản phẩm được đổi ngay máy mới chưa
                                    active trong vòng 15 ngày đầu tiên nếu phát sinh lỗi phần cứng
                                    do nhà sản xuất. Sau 15 ngày đầu, sản phẩm phát sinh lỗi linh
                                    kiện gì sẽ được Apple thay thế linh kiện chính hãng đó (màn
                                    hình, camera, pin…). Sản phẩm phát sinh lỗi mainboard sẽ được
                                    Apple thay thế cả cụm mainboard. Thời gian bảo hành từ 10-15
                                    ngày làm việc.
                                </p>
                            </li>
                            <li className='text-17 mb-5'>
                                3. Không bảo hành với trường hợp máy có dấu hiệu ngấm nước hoặc quỳ
                                tím bị đổi màu với bất kì lí do gì - kể cả đối với các sản phẩm có
                                tính năng chống nước.
                            </li>
                            <li className='text-17 mb-5'>
                                4. Công ty không chịu trách nhiệm, không đổi & bảo hành bất kể chức
                                năng gì khi máy có dấu hiệu va chạm vật lí: Rơi vỡ, xước, cấn, móp,
                                cong vênh với các sản phẩm đã ra khỏi showroom. Quý khách kiểm tra
                                kĩ hình thức máy và chỉ nhận Phiếu bảo hành khi đã kí nhận Phiếu bàn
                                giao hình thức máy.
                            </li>
                            <li className='text-17 mb-5'>
                                5. Quý khách kiểm tra sản phẩm chắc chắn không có tài khoản iCloud,
                                Samsung account công ty không chịu trách nhiệm về iCloud, Samsung
                                account sau khi quý khách đã sử dụng máy. Đặc biệt đối với Apple
                                watch, quý khách chỉ nhận đồng hồ khi đã kết nối thử với điện thoại
                                hoặc kiểm tra với nhân viên chắc chắn không có iCloud. Sau khi rời
                                showroom, công ty sẽ không chịu trách nhiệm nếu đồng hồ có iCloud
                            </li>
                            <li className='text-17 mb-5'>
                                6. Sản phẩm được nhập lại với bất kì lí do gì sẽ tuân theo chính
                                sách nhập lại của ONEWAY và thoả thuận phù hợp với nguyện vọng của
                                khách hàng. Xin cảm ơn quý khách đã tin tưởng sử dụng sản phẩm và
                                dịch vụ của ONEWAY!
                            </li>
                            <li className='text-center'>Cập nhật 18/04/2023</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel2'}
                    className='mb-5'
                    sx={{
                        boxShadow: 'none !important',
                        background: '#F5F5F7 !important',
                        padding: '10px 0'
                    }}
                    onChange={handleChange('panel2')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-19 font-bold'>
                            2.ĐIỆN THOẠI, MÁY TÍNH BẢNG, MACBOOK, ĐỒNG HỒ THÔNG MINH, PHỤ KIỆN QUA
                            SỬ DỤNG
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h5 className='mb-3 text-20'>CÁC ĐIỀU KHOẢN BẢO HÀNH CHI TIẾT</h5>
                        <ul className='mt-5'>
                            <li className='text-17 mb-5'>
                                1. Chỉ nhận bảo hành, đổi và nhập lại sản phẩm sau 13h00 hàng ngày
                                (bắt buộc mang theo Phiếu bàn giao hình thức máy và máy phải còn tem
                                bảo hành).
                            </li>
                            <li className='text-17 mb-5'>
                                <p className='mb-3'>
                                    2. Sản phẩm được đổi hoặc bảo hành khi đáp ứng đủ điều kiện Bảo
                                    hành số 3-4-5-6-7 dưới đây.
                                </p>
                                <p className='mb-3'>
                                    Trong 30 ngày đầu tiên, sản phẩm được 1 đổi 1 không cần lí do.
                                    Hoặc quý khách có thể lên đời sản phẩm chỉ cần bù thêm chênh
                                    lệch giữa 2 phiên bản, giá sẽ tính tại thời điểm đổi (thời gian
                                    đổi tính từ máy mua đầu tiên và chỉ đổi sản phẩm bằng hoặc hơn
                                    giá, không đổi sản phẩm giá thấp hơn hoặc khác dòng sản phẩm).
                                    Các sản phẩm qua sử dụng đều được bảo hành phần cứng 6 tháng bao
                                    gồm: Face ID, Touch ID, Mainboard và toàn bộ linh kiện: Camera,
                                    loa, mic, rung, cáp sạc … ngoại trừ màn hình và nguồn.
                                </p>
                            </li>
                            <li className='text-17 mb-5'>
                                3. Công ty có quyền từ chối đổi & bảo hành với các trường hợp máy
                                mất tem bảo hành với bất kì lí do gì. Sản phẩm sẽ được hỗ trợ giá
                                sửa chữa trong trường hợp này.
                            </li>
                            <li className='text-17 mb-5'>
                                4. Không bảo hành với trường hợp máy có dấu hiệu ngấm nước hoặc quỳ
                                tím bị đổi màu với bất kì lí do gì - kể cả đối với các sản phẩm có
                                tính năng chống nước.
                            </li>
                            <li className='text-17 mb-5'>
                                5. Công ty không chịu trách nhiệm, không đổi & bảo hành bất kể chức
                                năng gì khi máy có dấu hiệu va chạm vật lí: Rơi vỡ, xước, cấn, móp,
                                cong vênh với các sản phẩm đã ra khỏi showroom. Quý khách kiểm tra
                                kĩ hình thức máy và chỉ nhận Phiếu bảo hành khi đã kí nhận Phiếu bàn
                                giao hình thức máy.
                            </li>
                            <li className='text-17 mb-5'>
                                6. Quý khách kiểm tra sản phẩm chắc chắn không có tài khoản iCloud,
                                Samsung account. Công ty không chịu trách nhiệm về iCloud, Samsung
                                account sau khi quý khách đã sử dụng máy. Đặc biệt đối với Apple
                                watch, quý khách chỉ nhận đồng hồ khi đã kết nối thử với điện thoại
                                hoặc kiểm tra với nhân viên chắc chắn không có iCloud. Sau khi rời
                                showroom, công ty sẽ không chịu trách nhiệm nếu đồng hồ có iCloud.
                            </li>
                            <li className='text-17 mb-5'>
                                7. Sản phẩm được nhập lại với bất kì lí do gì sẽ tuân theo chính
                                sách nhập lại của ONEWAY và thoả thuận phù hợp với nguyện vọng của
                                khách hàng.
                                <p className='mt-3'>
                                    Xin cảm ơn quý khách đã tin tưởng sử dụng sản phẩm và dịch vụ
                                    của ONEWAY!
                                </p>
                            </li>
                            <li className='text-center'>Cập nhật 18/04/2023</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel3'}
                    className='mb-5'
                    sx={{
                        boxShadow: 'none !important',
                        background: '#F5F5F7 !important',
                        padding: '10px 0'
                    }}
                    onChange={handleChange('panel3')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-19 font-bold'>
                            3. THIẾT BỊ NHÀ THÔNG MINH
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h5 className='mb-3 text-20'>CÁC ĐIỀU KHOẢN BẢO HÀNH CHI TIẾT</h5>
                        <ul className='mt-5'>
                            <li className='text-17 mb-5'>
                                1. Tất cả các sản phẩm thiết bị nhà thông minh được bảo hành 12
                                tháng theo quy định bảo hành của hãng. Trong 15 ngày đầu tiên nếu
                                sản phẩm có lỗi phần cứng do nhà sản xuất không thể khác phục được,
                                công ty sẽ hỗ trợ đổi mới sang sản phẩm khác. Sau 15 ngày đầu tiên
                                tất cả các sản phẩm bảo hành sẽ được gửi đi trung tâm bảo hành chính
                                hãng tại Việt Nam, thời gian bảo hành sẽ phụ thuộc vào trung tâm bảo
                                hành của hãng.
                            </li>
                            <li className='text-17 mb-5'>
                                <p className='mb-3'>
                                    2. Sản phẩm không được tiếp nhận đổi mới và bảo hành trong các
                                    trường hợp sau:
                                </p>
                                <ul className='pl-3'>
                                    <li>
                                        a. Trong trường hợp bị tác động ngoại lực gây móp méo, sứt
                                        vỡ, có chất lỏng bên trong hoặc hoen rỉ.
                                    </li>
                                    <li>
                                        {' '}
                                        b. Trong các trường hợp hư hỏng do chập điện, cháy nổ hoặc
                                        do sự xâm nhập của chột, kiến, côn trùng...
                                    </li>
                                    <li>
                                        c. Sản phẩm bị mất serial hoặc serial bị mất nét không rõ
                                        chữ, có dấu hiệu tẩy xóa.
                                    </li>
                                    <li>
                                        {' '}
                                        d. Sử dụng sai điện áp quy định hoặc sai mục đích của nhà
                                        sản xuất.
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                3. Quý khách kiểm tra số serial trên sản phẩm có trùng khớp với hóa
                                đơn mua hàng và kiểm tra kĩ hình thức trước khi nhận sản phẩm. Công
                                ty sẽ Không chịu trách nhiệm khi sản phẩm bị xước, cong vênh, móp
                                hay nứt vỡ khi quý khách đã ra khỏi showroom.
                            </li>
                            <li className='text-center'>Cập nhật 18/04/2023</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='mb-5'>
                <h3 className='text-20 font-bold mb-5'>B. QUYỀN LỢI CÁC GÓI BẢO HÀNH</h3>
                <Accordion
                    expanded={expanded === 'panel4'}
                    className='mb-5'
                    sx={{
                        boxShadow: 'none !important',
                        background: '#F5F5F7 !important',
                        padding: '10px 0'
                    }}
                    onChange={handleChange('panel4')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-19 font-bold'>
                            GÓI BẢO HÀNH 1 NĂM 1 ĐỔI 1
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h5 className='mb-3 text-20'>QUYỀN LỢI GÓI BẢO HÀNH 1 NĂM 1 ĐỔI 1</h5>
                        <ul className='mt-5'>
                            <li className='text-17 mb-5'>
                                <strong>
                                    1. Sản phẩm iPhone, iPad, Macbook, Android, Apple Watch đã qua
                                    sử dụng được bảo hành 1 năm:
                                </strong>
                                <ul className='mt-5'>
                                    <li>
                                        a. Chế độ đổi sang sản phẩm tương đương: Thích là đổi không
                                        cần lý do trong vòng 1 năm - không giới hạn số lần đổi. Thời
                                        gian bảo hành của sản phẩm được đổi sang tính theo thời gian
                                        bảo hành của sản phẩm đầu tiên.
                                    </li>
                                    <li>
                                        b. Chế độ lên đời sản phẩm Miễn phí trong 1 tháng đầu tiên:
                                        Chỉ cần bù thêm chênh lệch giữa 2 Sản phẩm - không mất thêm
                                        bất kể chi phí gì (tất cả giá được tính theo bảng giá tại
                                        thời điểm đổi). Gói Bảo hành 1 năm 1 đổi 1 chỉ được bảo lưu
                                        nếu 2 Sản phẩm cùng khung giá trị Bảo hành mở rộng.
                                    </li>
                                    <li>
                                        c. Chế độ lên đời sản phẩm trong 11 tháng tiếp theo: Bù thêm
                                        phần chênh lệch giữa 2 sản phẩm + 10% giá trị sản phẩm cũ
                                        đang sử dụng (tất cả giá được tính theo bảng giá tại thời
                                        điểm đổi). Thời gian bảo hành của sản phẩm được đổi sang là
                                        6 tháng tính từ ngày đổi với sản phẩm qua sử dụng và theo
                                        thời gian bảo hành của hãng nếu là sản phẩm mới (khi lên đời
                                        sản phẩm mới không được bảo lưu gói Bảo hành mở rộng đã mua
                                        lúc đầu).
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>
                                    2. Sản phẩm iPhone, iPad, Macbook, Android, Apple Watch Mới chưa
                                    Active:
                                </strong>
                                <ul className='mt-5'>
                                    <li>
                                        a. Sản phẩm iPhone, iPad, Apple watch mới chưa active: trong
                                        vòng 1 năm tính từ ngày đầu tiên mua sản phẩm với các lỗi
                                        phần cứng của nhà sản xuất, được đổi sang 1 máy mới chưa
                                        active đủ 365 ngày bảo hành. Thời gian đổi: sau khi có xác
                                        nhận của hãng hoặc 7 ngày với các sản phẩm chưa xác định
                                        được ngay Serial, Imei.
                                    </li>
                                    <li>
                                        b. Sản phẩm Macbook mới chưa active được bảo hành 2 năm bao
                                        gồm: 1 năm đầu tiên theo chính sách của Apple Việt Nam và 1
                                        năm tiếp theo đổi sang máy qua sử dụng tương đương với sản
                                        phẩm lỗi không sửa được.
                                    </li>
                                    <li>
                                        c. Sản phẩm Android Mới: trong vòng 1 năm tính từ ngày đầu
                                        tiên mua sản phẩm với các lỗi phần cứng của nhà sản xuất,
                                        được đổi sang 1 máy mới như ban đầu. Thời gian đổi: sau khi
                                        có xác nhận của hãng hoặc 7 ngày với các sản phẩm chưa xác
                                        định được ngay Serial, Imei.
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>3. Điều khoản chung cho các sản phẩm mục (1) và (2)</strong>
                                <ul className='mt-5'>
                                    <li>
                                        a. Điều kiện để được áp dụng tất cả các gói bảo hành 1 năm 1
                                        đổi 1: Sản phẩm không vi phạm các điều khoản loại trừ theo
                                        điều số 3, 4, 5, 6, 7 trên Phiếu bảo hành mặc định.
                                    </li>
                                    <li>
                                        b. Tất cả các sản phẩm khi mua Bảo hành mở rộng được bảo
                                        hành cả Nguồn và Màn hình. Màn hình được bảo hành trong
                                        trường hợp đơ, loạn hoặc mất cảm ứng (không đổi & bảo hành
                                        trong trường hợp màn hình bị lỗi hiển thị, sọc màn, chảy
                                        mực, chết đen). Riêng vấn đề trắng màn, xanh màn do lỗi nhà
                                        sản xuất của iPhone 13 Pro, 13 Pro max được bảo hành theo
                                        quy định của Apple.
                                    </li>
                                    <li>
                                        c. Chế độ lên đời sản phẩm: Trong thời gian bảo hành, chỉ
                                        cần bù thêm phần chênh lệch giữa 2 sản phẩm + 10% giá trị
                                        sản phẩm cũ đang sử dụng (tất cả giá được tính theo bảng giá
                                        máy Like new tại thời điểm đổi). Thời gian bảo hành của sản
                                        phẩm được đổi sang là 6 tháng tính từ ngày đổi với sản phẩm
                                        qua sử dụng và theo thời gian bảo hành của hãng nếu là sản
                                        phẩm mới (khi lên đời sản phẩm mới không được bảo lưu gói
                                        Bảo hành mở rộng đã mua lúc đầu).
                                    </li>
                                    <li>
                                        d. Các máy mua Bảo hành 1 năm 1 đổi 1 được ép lại kính 1 lần
                                        khi rơi vỡ mà hiển thị, cảm ứng vẫn dùng bình thường (được
                                        ép lại mặt kính trước hoặc kính sau hoặc kính camera - không
                                        áp dụng đồng thời). Sau khi ép kính, gói bảo hành hết hiệu
                                        lực ngay lập tức (áp dụng từ 24/11/2021). <br />
                                        <br />
                                        Các sản phẩm do lỗi người dùng, nằm ngoài chế độ bảo hành,
                                        khi sửa chữa vẫn được giảm giá.
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>4. Sản phẩm thiết bị Nhà thông minh:</strong>
                                <ul className='mt-5'>
                                    <li>
                                        Trong vòng 1 năm tính từ ngày đầu tiên mua sản phẩm, với các
                                        lỗi phần cứng của nhà sản xuất được Trung tâm bảo hành xác
                                        nhận, sản phẩm thiết bị Nhà thông minh được đổi sang 1 sản
                                        phẩm mới ngay lập tức.
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>
                                    5. Sản phẩm Phụ kiện: củ sạc, dây cáp, tai nghe, cổng chuyển
                                    đổi, loa di động, bút cảm ứng, bàn phím iPad , bàn phím iMac,
                                    Airtag …
                                </strong>
                                <ul className='mt-5'>
                                    <li>
                                        Sản phẩm Phụ kiện được bảo hành 2 năm tính từ ngày đầu tiên
                                        mua hàng. Trong 2 năm sản phẩm được đổi Mới ngay lập tức với
                                        tất cả các lỗi do nhà sản xuất.
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>6. Đối với gói “Bảo hành 1 năm 1 đổi 1 mua trước”,</strong>{' '}
                                Khách hàng chỉ cần thanh toán 50% giá trị gói Bảo hành tại thời điểm
                                mua máy. Khách hàng vẫn được sử dụng quyền lợi Thích là đổi không
                                cần lý do trong vòng 1 năm (đối với sản phẩm qua sử dụng). Sau đó,
                                nếu có phát sinh vấn đề với sản phẩm, khách hàng thanh toán 50% còn
                                lại tại thời điểm sử dụng các quyền lợi khác của gói Bảo hành 1 năm
                                1 đổi 1.
                            </li>
                            <li className='text-center'>Cập nhật 18/04/2023</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel5'}
                    className='mb-5'
                    sx={{
                        boxShadow: 'none !important',
                        background: '#F5F5F7 !important',
                        padding: '10px 0'
                    }}
                    onChange={handleChange('panel5')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-19 font-bold'>
                            GÓI BẢO HÀNH 2 NĂM 1 ĐỔI 1
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h5 className='mb-3 text-20'>QUYỀN LỢI GÓI BẢO HÀNH 2 NĂM 1 ĐỔI 1</h5>
                        <ul className='mt-5'>
                            <li className='text-17 mb-5'>
                                <strong>
                                    1. Sản phẩm iPhone, iPad, Macbook, Android, Apple Watch đã qua
                                    sử dụng được bảo hành 2 năm:
                                </strong>
                                <ul className='mt-5'>
                                    <li className='mb-3'>
                                        a. Chế độ đổi sang sản phẩm tương đương: Thích là đổi không
                                        cần lý do trong vòng 2 năm - không giới hạn số lần đổi. Thời
                                        gian bảo hành của sản phẩm được đổi sang tính theo thời gian
                                        bảo hành của sản phẩm đầu tiên.
                                    </li>
                                    <li className='mb-3'>
                                        b. Chế độ lên đời sản phẩm Miễn phí trong 3 tháng đầu tiên:
                                        Chỉ cần bù thêm chênh lệch giữa 2 Sản phẩm - không mất thêm
                                        bất kể chi phí gì (tất cả giá được tính theo bảng giá tại
                                        thời điểm đổi). Gói Bảo hành 2 năm 1 đổi 1 chỉ được bảo lưu
                                        nếu 2 Sản phẩm cùng khung giá trị Bảo hành mở rộng.{' '}
                                    </li>
                                    <li className='mb-3'>
                                        c. Chế độ lên đời sản phẩm trong 21 tháng tiếp theo: Bù thêm
                                        phần chênh lệch giữa 2 sản phẩm + 8% giá trị sản phẩm cũ
                                        đang sử dụng (tất cả giá được tính theo bảng giá tại thời
                                        điểm đổi). Thời gian bảo hành của sản phẩm được đổi sang là
                                        6 tháng tính từ ngày đổi với sản phẩm qua sử dụng và theo
                                        thời gian bảo hành của hãng nếu là sản phẩm mới (khi lên đời
                                        sản phẩm mới không được bảo lưu gói Bảo hành mở rộng đã mua
                                        lúc đầu).
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>
                                    2. Sản phẩm iPhone, iPad, Macbook, Android, Apple Watch Mới:
                                </strong>
                                <ul className='mt-5'>
                                    <li className='mb-3'>
                                        a. Sản phẩm iPhone, iPad, Apple watch mới chưa active được
                                        bảo hành 2 năm bao gồm: trong vòng 1 năm đầu tiên với các
                                        lỗi phần cứng của nhà sản xuất, được đổi sang 1 máy mới chưa
                                        active đủ 365 ngày bảo hành. Thời gian đổi: sau khi có xác
                                        nhận của hãng hoặc 7 ngày với các sản phẩm chưa xác định
                                        được ngay serial, imei. 1 năm tiếp theo, sản phẩm được đổi
                                        sang máy qua sử dụng tương đương.
                                    </li>
                                    <li className='mb-3'>
                                        b. Sản phẩm Macbook mới chưa active được bảo hành 3 năm bao
                                        gồm: 1 năm đầu tiên theo chính sách của Apple Việt Nam và 2
                                        năm tiếp theo đổi sang máy qua sử dụng tương đương với sản
                                        phẩm lỗi không sửa được.
                                    </li>
                                    <li className='mb-3'>
                                        c. Sản phẩm Android Mới được bảo hành 2 năm bao gồm: trong
                                        vòng 1 năm đầu tiên với các lỗi phần cứng của nhà sản xuất,
                                        được đổi sang 1 máy mới như ban đầu. Thời gian đổi: sau khi
                                        có xác nhận của hãng hoặc 7 ngày với các sản phẩm chưa xác
                                        định được ngay serial, imei. 1 năm tiếp theo, sản phẩm được
                                        bảo hành theo chính sách TTBH tại Việt Nam hoặc đổi sang máy
                                        qua sử dụng tương đương.
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>3. Điều khoản chung cho các sản phẩm mục (1) và (2)</strong>
                                <ul className='mt-5'>
                                    <li className='mb-3'>
                                        a. Điều kiện để được áp dụng tất cả các gói bảo hành 2 năm 1
                                        đổi 1: Sản phẩm không vi phạm các điều khoản loại trừ theo
                                        điều số 3, 4, 5, 6, 7 trên Phiếu bảo hành mặc định.
                                    </li>
                                    <li className='mb-3'>
                                        b. Tất cả các sản phẩm khi mua Bảo hành mở rộng được bảo
                                        hành cả Nguồn và Màn hình. Màn hình được bảo hành trong
                                        trường hợp đơ, loạn hoặc mất cảm ứng (không đổi & bảo hành
                                        trong trường hợp màn hình bị lỗi hiển thị, sọc màn, chảy
                                        mực, chết đen). Riêng vấn đề trắng màn, xanh màn do lỗi nhà
                                        sản xuất của iPhone 13 Pro, 13 Pro max được bảo hành theo
                                        quy định của Apple.
                                    </li>
                                    <li className='mb-3'>
                                        c. Chế độ lên đời sản phẩm: Trong thời gian bảo hành, chỉ
                                        cần bù thêm phần chênh lệch giữa 2 sản phẩm + 8% giá trị sản
                                        phẩm cũ đang sử dụng (tất cả giá được tính theo bảng giá máy
                                        Like new tại thời điểm đổi). Thời gian bảo hành của sản phẩm
                                        được đổi sang là 6 tháng tính từ ngày đổi với sản phẩm qua
                                        sử dụng và theo thời gian bảo hành của hãng nếu là sản phẩm
                                        mới (khi lên đời sản phẩm mới không được bảo lưu gói Bảo
                                        hành mở rộng đã mua lúc đầu).
                                    </li>
                                    <li>
                                        d. Các máy mua Bảo hành 2 năm 1 đổi 1 được ép lại kính 2 lần
                                        khi rơi vỡ mà hiển thị , cảm ứng vẫn dùng bình thường (được
                                        ép lại mặt kính trước hoặc kính sau hoặc kính camera - không
                                        áp dụng đồng thời). Sau khi ép kính , các gói bảo hành hết
                                        hiệu lực ngay lập tức.
                                        <br />
                                        <br />
                                        Các trường hợp vì lí do lỗi người dùng, nằm ngoài chế độ Bảo
                                        hành, khi sửa chữa được giảm 50% - khi thay thế linh kiện
                                        được giảm 30% tất cả các Dịch vụ.
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                5. Công ty không chịu trách nhiệm, không đổi & bảo hành bất kể chức
                                năng gì khi máy có dấu hiệu va chạm vật lí: Rơi vỡ, xước, cấn, móp,
                                cong vênh với các sản phẩm đã ra khỏi showroom. Quý khách kiểm tra
                                kĩ hình thức máy và chỉ nhận Phiếu bảo hành khi đã kí nhận Phiếu bàn
                                giao hình thức máy.
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>4. Đối với gói “Bảo hành 2 năm 1 đổi 1 mua trước”,</strong>{' '}
                                Khách hàng chỉ cần thanh toán 50% giá trị gói bảo hành tại thời điểm
                                mua máy. Khách hàng vẫn được sử dụng quyền lợi Thích là đổi không
                                cần lý do trong vòng 2 năm (đối với sản phẩm qua sử dụng). Sau đó,
                                nếu có phát sinh vấn đề với sản phẩm, khách hàng thanh toán 50% còn
                                lại tại thời điểm sử dụng các quyền lợi khác của gói Bảo hành 2 năm
                                1 đổi 1.
                            </li>
                            <li className='text-center'>Cập nhật 18/04/2023</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel6'}
                    className='mb-5'
                    sx={{
                        boxShadow: 'none !important',
                        background: '#F5F5F7 !important',
                        padding: '10px 0'
                    }}
                    onChange={handleChange('panel6')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-19 font-bold'>
                            GÓI BẢO HÀNH RƠI VỠ - NGẤM NƯỚC
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h5 className='mb-3 text-18 font-bold'>BẢO HÀNH RƠI VỠ NGẤM NƯỚC</h5>
                        <ul className='mt-5'>
                            <li className='text-17 mb-3'>
                                <strong>1. Quyền lợi:</strong>
                                <ul className='mt-5'>
                                    <li className='mb-3'>
                                        a. Gói bảo hành rơi vỡ, ngấm nước chỉ dành cho sản phẩm
                                        iPhone mới chưa Active và Android Mới. Thời hạn bảo hành 1
                                        năm. Giá trị gói bảo hành bằng giá trị sản phẩm mua ban đầu.
                                    </li>
                                    <li className='mb-3'>
                                        b. Sản phẩm bị lỗi phần cứng do nhà sản xuất (không phải do
                                        rơi vỡ, ngấm nước) được đổi sang 1 máy mới chưa active đủ
                                        365 ngày bảo hành đối với iPhone hoặc máy mới như ban đầu
                                        đối với Android. Thời gian đổi: sau khi có xác nhận của hãng
                                        hoặc tối đa 7 ngày với các sản phẩm chưa xác định ngay được
                                        serial, imei.
                                    </li>
                                    <li className='mb-3'>
                                        c. Sản phẩm bị rơi vỡ, ngấm nước được hỗ trợ 90% chi phí sửa
                                        chữa, thay thế linh kiện, ép kính. Số lần sửa chữa không
                                        giới hạn, tối đa bằng 100% giá trị của sản phẩm mua ban đầu.
                                    </li>
                                    <li className='mb-3'>
                                        d. Trường hợp sản phẩm bị rơi vỡ, ngấm nước nhưng không sửa
                                        chữa được, quý khách được đổi sang một sản phẩm cũ tương
                                        đương với sản phẩm bảo hành và chỉ phải thêm khoản phí 10%
                                        giá trị sản phẩm lúc mua thời điểm đầu tiên.
                                        <br /> <br />
                                        Trường hợp quý khách đã sử dụng quyền lợi hỗ trợ theo mục 1c
                                        ở các lần bảo hành trước đó, khi sản phẩm rơi vỡ không thể
                                        sửa chữa được, quý khách sẽ được đổi sang sản phẩm cũ tương
                                        đương khi thêm 10% giá trị sản phẩm lúc mua thời điểm đầu
                                        tiên và hoàn lại các khoản bảo hành đã sử dụng trước đó,
                                        đồng thời công ty cũng trả lại các khoản phí khách hàng đã
                                        chi trả.
                                        <br /> <br />
                                        Khoản phí quý khách phải thêm = (10% giá trị sản phẩm lúc
                                        mua thời điểm đầu tiên) + (Giá trị các khoản Bảo hành đã sử
                                        dụng trước đó) – (Khoản phí khách hàng đã thanh toán)
                                        <br /> <br />
                                        Ví dụ: Quý khách mua sản phẩm mới ban đầu có giá trị
                                        20,000,000đ. Quý khách dùng sau 5 tháng bị rơi vỡ phải thay
                                        màn, giá trị màn là 8,000,000đ, trường hợp này quý khách
                                        được thay màn và chỉ phải trả 800,000đ. 3 tháng sau máy bị
                                        ngấm nước, không thể sửa được, Quý khách được đổi sang máy
                                        qua sử dụng tương đương,
                                        <br /> <br />
                                        Khoản phí lúc này quý khách phải trả = 2,000,000đ +
                                        8,000,000đ – 800,000đ = 9,200,000đ
                                        <br /> <br />
                                        Đồng thời gói Bảo hành rơi vỡ, ngấm nước sẽ hết hiệu lực
                                        ngay sau khi đổi. Sản phẩm sau khi đổi sẽ được Bảo hành sửa
                                        chữa 6 tháng tại Oneway với các lỗi do nhà sản xuất.
                                    </li>
                                    <li className='mb-3'>
                                        e. Chế độ lên đời sản phẩm (khi máy chưa bị rơi vỡ, ngấm
                                        nước): Bù thêm phần chênh lệch giữa 2 sản phẩm + 10% giá trị
                                        sản phẩm cũ đang sử dụng (tất cả giá được tính theo bảng giá
                                        tại thời điểm đổi). Thời gian bảo hành của sản phẩm được đổi
                                        sang là 6 tháng tính từ ngày đổi với sản phẩm qua sử dụng và
                                        theo thời gian bảo hành của hãng nếu là sản phẩm mới (khi
                                        lên đời sản phẩm mới không được bảo lưu gói Bảo hành mở rộng
                                        đã mua lúc đầu).
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-3'>
                                <strong>
                                    2. Điều kiện để được áp dụng gói bảo hành Rơi vỡ ngấm nước:{' '}
                                </strong>
                                <ul className='mt-5'>
                                    <li className='mb-3'>
                                        a. Sản phẩm phải được chuyển đến trung tâm bảo hành của
                                        Oneway chậm nhất 12 tiếng sau khi bị rơi vỡ, ngấm nước.
                                    </li>
                                    <li className='mb-3'>
                                        b. Sản phẩm Không vi phạm các điều khoản loại trừ sau: thiếu
                                        linh kiện; đã bị can thiệp sửa chữa bởi bên khác; sử dụng
                                        sai HDSD của nhà sản xuất hoặc người sử dụng cố tình làm hư
                                        hỏng; tai nạn do thiên tai bất ngờ, chập cháy điện; các vấn
                                        đề thẩm mĩ do hao mòn, trầy xước, bạc màu …
                                    </li>
                                    <li className='mb-3'>
                                        c. Sản phẩm không bị cong, biến dạng Khung máy.
                                    </li>
                                    <li className='mb-3'>
                                        d. Sản phẩm bị rơi vỡ, ngấm nước và vẫn phải lên nguồn để
                                        check được serial, imei. Gói bảo hành Rơi vỡ, ngấm nước sẽ
                                        không có hiệu lực đối với các sản phẩm bị rơi vỡ, ngấm nước
                                        nhưng Không lên nguồn (Công ty sẽ hỗ trợ sửa chữa với chi
                                        phí hỗ trợ nhất trong trường hợp này).
                                    </li>
                                </ul>
                            </li>
                            <li className='text-17 mb-5'>
                                <strong>
                                    3. Đối với gói “Bảo hành rơi vỡ ngấm nước mua trước”,
                                </strong>{' '}
                                Khách hàng chỉ cần thanh toán 50% giá trị gói Bảo hành tại thời điểm
                                mua máy. Sau đó, nếu có phát sinh vấn đề với sản phẩm, khách hàng sẽ
                                thanh toán 50% còn lại tại thời điểm sử dụng các quyền lợi khác của
                                gói Bảo hành rơi vỡ ngấm nước.
                            </li>
                            <li className='text-center'>Cập nhật 18/04/2023</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <h3 className='text-20 font-bold mb-3'> C. CHÍNH SÁCH NHẬP LẠI LÊN ĐỜI</h3>
                <p className='text-18 leading-[32px]'>
                    Với những máy cũ (dù mua tại Oneway hay không) hình thức còn đẹp, chưa thay thế
                    linh kiện, Oneway sẽ hỗ trợ <strong>thu cũ đổi mới</strong> trợ lên tới{' '}
                    <strong>2.500.000đ</strong> cho quý khách hàng, đảm bảo khách hàng lên đời máy
                    mới với chi phí rẻ nhất.
                    <br />
                    Để đảm bảo đưa ra mức giá lên đời chính xác nhất, kính mời quý khách hàng mang
                    máy của mình qua Oneway để kỹ thuật hỗ trợ. Tổng đài - nhấn phím 2 gặp bộ phận
                    kỹ thuật: 02466819779
                </p>
            </div>
        </div>
    );
};

export default Guarantee;
