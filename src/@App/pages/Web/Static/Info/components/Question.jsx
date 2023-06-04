import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Question = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='p-0 md:p-10'>
            <div className='relative'>
                <h1 className='text-center text-[32px] font-bold'>
                    CÂU HỎI THƯỜNG GẶP KHI MUA HÀNG ONLINE
                </h1>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='mt-10'>
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
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-18 font-bold'>
                            1. Tôi mua hàng từ xa liệu chất lượng hàng có đảm bảo không ?
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='mb-3 text-17'>
                        Oneway là đơn vị Uy tín được khách hàng từ mọi miền tổ quốc luôn tin tưởng và giới thiệu cho bạn bè. Khách mua hàng từ xa OneWay tặng thêm 1 tháng Bảo hành thành 13 tháng (đối với sản phẩm mới) và 7 tháng (đối với sản phẩm đã qua sử dụng), 30 ngày THÍCH LÀ ĐỔI KHÔNG CẦN LÝ DO.
                        </p>
                        <p className='mb-3 text-17'>
                        Đặc biệt máy gửi đi xa luôn được đội ngũ kỹ thuật của chúng tôi kiểm tra kỹ lưỡng về hình thức,15 bước test máy cẩn thận về chức năng. Khách hàng được đồng kiểm với Viettelpost trước khi nhận hàng và thanh toán nên quý khách hàng hoàn toàn yên tâm về chất lượng sản phẩm, an toàn tuyệt đối khi mua hàng từ xa tại OneWay.
                        </p>
                        <p className='mb-3 text-17'>
                        OneWay sẽ chịu trách nhiệm nếu trong quá trình vận chuyển gặp sự cố như rơi vỡ, thất lạc…Chúng tôi cam kết sẽ đổi hàng ngay nếu quý khách không hài lòng.
                        </p>
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
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-18 font-bold'>
                            2.Tôi ở xa mua online thì bảo hành như thế nào?
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='mb-3 text-17'>
                        Tất cả các sản phẩm nhập về đã được chọn lọc và kiểm định chất lượng. Trước khi gửi hàng chúng tôi lại kiểm tra lại lần nữa để hạn chế tối đa khả năng lỗi của sản phẩm chuyển đến tay bạn.
                        </p>
                        <p className='mb-3 text-17'>
                        Trong quá trình sử dụng, nếu sản phẩm của bạn bị lỗi, hãy bình tĩnh, và thông báo lại cho OneWay theo hotline: <strong>02466819779</strong> để trao đổi thông tin. Tùy tình trạng cụ thể, OneWay sẽ cho bạn biết phương án giải quyết tối ưu nhất (ví dụ hướng dẫn thao tác, cài đặt phần mềm ...)
                        </p>
                        <p className='mb-3 text-17'>
                        Sản phẩm phải bảo hành sẽ được hướng dẫn chuyển về địa chỉ của OneWay và được bộ phận kỹ thuật của chúng tôi giải quyết nhanh nhất có thể và gửi hàng về cho khách
                        </p>
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
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-18 font-bold'>
                        3.Tôi sợ mua hàng xa vì lo va đập, hỏng hóc trong quá trình vận chuyển?
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='mb-3 text-17'>
                        Để đảm bảo vận chuyển chính xác và an toàn nhất, Oneway chúng tôi đã sử dụng dịch vụ chuyển phát nhanh của ViettelPost. Ngay sau khi xác nhận giao dịch thành công, Oneway sẽ chuyển phát đơn hàng sang dịch vụ của Viettel Post và gửi lại cho khách hàng <strong>Mã Vận Đơn</strong> để cùng theo dõi tiến trình đi của đơn hàng.
                        </p>
                        <p className='mb-3 text-17'>
                        Oneway chịu hoàn toàn trách nhiệm đối với bất kì rủi ro nào trong lúc vận chuyển.
                        </p>
                    </AccordionDetails>
                </Accordion>
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
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-18 font-bold'>
                        4. Tôi có được kiểm tra hàng trước khi nhận không?
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='mb-3 text-17'>
                        Tất cả các sản phẩm ship COD của Oneway, khách hàng đều <strong>được đồng kiểm với bưu tá</strong> trước khi nhận hàng và thanh toán tiền. Gói hàng kiểm tra đảm bảo còn niêm phong, không bị ngấm nước, không bị móp méo, imei – serial máy trùng với thông tin trên liên Viettelpost. Nếu có bất kì dấu hiệu bất thường nào, bạn vui lòng không nhận hàng và liên hệ với Oneway ngay để được đổi mới sản phẩm khác.
                        </p>
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
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-18 font-bold'>
                        4. Tôi có được kiểm tra hàng trước khi nhận không?
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='mb-3 text-17'>
                        Nếu là khách hàng ở xa, Oneway sẽ hỗ trợ chụp ảnh hình thức, quay video test máy trước. Bạn ưng máy nào Oneway mới gửi máy đó về. Ngoài ra, khi nhận hàng bạn được kiểm tra hình thức, chức năng với Bưu tá trước khi nhận hàng. Nếu không ưng có thể trả lại ngay.
                        </p>
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
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-18 font-bold'>
                        6. Khi cần xem ảnh thật , tư vấn về sản phẩm, hoặc khiếu nại đơn hàng liên hệ ai nhanh nhất?
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='mb-3 text-17'>
                        Quý khách gọi đến số Hotline 02466819779 - 0855203333 hoặc inbox qua panpage Facebook Oneway: https://www.facebook.com/ONEWAY.416CAUGIAY/ để được hỗ trợ nhanh nhất.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel7'}
                    className='mb-5'
                    sx={{
                        boxShadow: 'none !important',
                        background: '#F5F5F7 !important',
                        padding: '10px 0'
                    }}
                    onChange={handleChange('panel7')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-18 font-bold'>
                        7. Tôi mua hàng rồi không vừa ý có thể đổi lại máy khác hay không?
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='mb-3 text-17'>
                        Trả lời: <strong>CÓ.</strong> Tất cả sản phẩm Likenew bán ra tại Oneway đều được 1 ĐỔI 1 trong 30 ngày, không giới hạn số lần đổi máy. Kể cả bạn không ưng màu mình đã chọn vẫn có thể đổi sang màu khác thoải mái, hoặc đổi sang máy có giá trị cao hơn chỉ cần thêm phần chênh lệch.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel8'}
                    className='mb-5'
                    sx={{
                        boxShadow: 'none !important',
                        background: '#F5F5F7 !important',
                        padding: '10px 0'
                    }}
                    onChange={handleChange('panel8')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                    >
                        <h2 sx={{ width: '100%', flexShrink: 0 }} className='text-18 font-bold'>
                        8. Tôi muốn mua hàng phải làm sao?
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='mb-3 text-17'>
                        Bước 1 - Đặt hàng: Bạn có thể inbox vào mục Chat trên Website để check thông tin và được tư vấn chi tiết về sản phẩm: tên máy, phụ kiện kèm theo, giá và khuyến mãi tại thời điểm mua. Sau đó để lại Họ tên, SĐT, Địa chỉ nhận hàng cụ thể.
                        </p>
                        <p className='mb-3 text-17'>
                        Bước 2 - Xác nhận đơn hàng: Bạn chỉ cần chuyển 200,000đ tiền cọc hoặc toàn bộ tiền sản phẩm qua tài khoản ngân hàng của OneWay. Sau đó gọi đến SĐT: 02466819779 để nhanh chóng kiểm tra tiền đến và chuyển hàng.
                        </p>
                        <p  className='mb-3 text-17'>Nhân viên Oneway sẽ xác nhận lại đơn hàng và thời gian nhận hàng. Sau đó tiến hành gửi hàng</p>
                        <p className='mb-3 text-17'>
                        Bước 3 - Gửi hàng: OneWay sẽ chuyển phát đơn hàng sang dịch vụ của Viettel và gửi lại cho khách hàng Mã Vận Đơn của đơn hàng. Khách hàng có thể truy cập https://www.viettelpost.com.vn/ để điền mã vận đơn vào ô tra cứu vận đơn. Khách hàng sẽ kiểm soát được tình trạng lộ trình hàng về.
                        </p>
                        <p className='mb-3 text-17'>
                        Bước 4 - Nhận hàng và Thanh toán: Khách hàng nhận hàng kiểm tra hình thức máy, đối chiếu imei trên hóa đơn và imei trên máy. Khi đã yên tâm hài lòng khách hàng thanh toán toàn bộ số tiền còn lại.
                        </p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Question;
