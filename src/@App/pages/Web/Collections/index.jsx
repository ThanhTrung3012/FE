import React, { useEffect, useState } from 'react';
import { marks } from './data';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Slider, styled } from '@mui/material';
import handlePrice from '@Core/Helper/Price';
import Product from './components/Product';
import Pagination from '@mui/material/Pagination';
import { useDebounce, useRequest } from 'ahooks';
import { productService } from '@App/services/productService';
import useChildrenCategories from './hooks/useChildrenCategories';

const SliderStyle = styled(Slider)({
    '& .MuiSlider-thumb': {
        height: 10,
        width: 10
    },
    '& .MuiSlider-valueLabel': {
        fontSize: 10
    }
});

const Collections = () => {
    const { id } = useParams();
    const [page, setPage] = useState(1);
    const [filterPrice, setFilterPrice] = React.useState([0, 150000000]);
    const filterPriceDebounce = useDebounce(filterPrice, { wait: 500 });
    const { categories, loadingCategories } = useChildrenCategories(id);

    const {
        data: products,
        loading,
        run: getProducts
    } = useRequest(productService.getByCategory, {
        manual: true
    });

    useEffect(() => {
        if (id) {
            const stratPrice = filterPriceDebounce[0];
            const endPrice = filterPriceDebounce[1];
            getProducts(id, { page_size: 20, page_index: page, stratPrice, endPrice });
        }
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, [id, page, filterPriceDebounce]);

    const handleChange = (_, v) => {
        setFilterPrice(v);
    };

    if (loadingCategories || loading) {
        return (
            <div className='flex justify-center min-h-[70vh] items-center'>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className='min-h-[70vh]'>
            <div className='flex items-center gap-3 flex-wrap mb-3'>
                {categories?.data?.map((item, i) => (
                    <div
                        key={i}
                        className='border p-1 px-3 rounded-[20px] border-gray-300 bg-white text-14'
                    >
                        <Link to={'/collections/' + item?._id} className='font-bold'>
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
            <React.Fragment>
                <h3 className='text-17 font-bold mb-3'>Chọn theo tiêu chí:</h3>
                <div className='flex items-start gap-3 w-1/2 mb-5'>
                    <h3 className='text-17 font-bold mr-3'>Giá:</h3>
                    <SliderStyle
                        min={0}
                        step={1000}
                        max={150000000}
                        value={filterPrice}
                        onChange={handleChange}
                        valueLabelDisplay='auto'
                        valueLabelFormat={value => `${handlePrice(value)}`}
                        className='w-1/2'
                        size='medium'
                        marks={marks}
                        color='orange'
                    />
                </div>
                <h3 className='text-17 font-bold mb-3'>Sắp xếp theo:</h3>
            </React.Fragment>
            {loading ? (
                <div className='flex justify-center min-h-[50vh] items-center'>
                    <CircularProgress />
                </div>
            ) : products?.data?.length > 0 ? (
                <React.Fragment>
                    <div className='grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-2'>
                        {products?.data?.map(item => (
                            <Product key={item?._id} item={item} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-5'>
                        <Pagination
                            page={page}
                            count={Math.ceil(products?.total / Number(products?.page_size))}
                            color='orange'
                            onChange={(_, page) => {
                                setPage(page);
                            }}
                        />
                    </div>
                </React.Fragment>
            ) : (
                <p>Không tìm thấy sản phẩm phù hợp!!!</p>
            )}
        </div>
    );
};

export default Collections;
