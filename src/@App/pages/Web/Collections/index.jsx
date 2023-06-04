import React, { useEffect, useState } from 'react';
import { marks, sorts } from './data';
import { Link, useParams } from 'react-router-dom';
import { Slider, styled } from '@mui/material';
import handlePrice from '@Core/Helper/Price';
import Product from './components/Product';
import Pagination from '@mui/material/Pagination';
import { useDebounce, useRequest } from 'ahooks';
import { productService } from '@App/services/productService';
import useChildrenCategories from './hooks/useChildrenCategories';
import WebLoading from '@App/components/Loading/WebLoading';
import ElementLoading from '@App/components/Loading/ElementLoading';
import clsx from 'clsx';

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
    const [sort, setSort] = useState(null);
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
            getProducts(id, {
                page_size: 20,
                page_index: page,
                stratPrice,
                endPrice,
                ...(sort ? { sort } : {})
            });
        }
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, [id, page, filterPriceDebounce, sort]);

    const handleChange = (_, v) => {
        setFilterPrice(v);
    };

    if (loadingCategories) {
        return (
            <div className='flex justify-center min-h-[70vh] items-center'>
                <WebLoading />
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
                <div className='flex items-start gap-3 w-full md:w-8/12 lg:w-1/2 mb-5'>
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
                <div className='mb-3'>
                    <h3 className='text-17 font-bold mb-3'>Sắp xếp theo:</h3>
                    <div className='flex items-center flex-wrap gap-5'>
                        {sorts.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    setSort(item.sort)
                                    setPage(1)
                                }}
                                className={clsx(
                                    'flex items-center gap-1 rounded-xl border p-2 cursor-pointer',
                                    sort == item.sort ? 'bg-[#F06837] text-white border-[#F06837]' : 'bg-white border-gray-400'
                                )}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
            {loading ? (
                <div className='flex justify-center min-h-[50vh] items-center'>
                    <ElementLoading />
                </div>
            ) : products?.data?.length > 0 ? (
                <React.Fragment>
                    <div className='grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-2'>
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
