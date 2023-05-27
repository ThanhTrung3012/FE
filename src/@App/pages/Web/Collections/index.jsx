import React, { useEffect } from 'react';
import { categories, marks } from './data';
import { Link } from 'react-router-dom';
import { Slider, styled } from '@mui/material';
import handlePrice from '@Core/Helper/Price';
import Product from './components/Product';
import Pagination from '@mui/material/Pagination';

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
    const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [value, setValue] = React.useState([5000000, 10000000]);

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);

    const handleChange = (_, v) => {
        setValue(v);
    };

    return (
        <div>
            <div className='flex items-center gap-3 flex-wrap mb-3'>
                {categories.map((item, i) => (
                    <div
                        key={i}
                        className='border p-1  rounded-xl border-gray-300 bg-white text-14'
                    >
                        <Link to='/' className='font-bold'>
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
                        max={15000000}
                        value={value}
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
            <React.Fragment>
                <div className='grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-2'>
                    {arrays.map(item => (
                        <Product key={item} />
                    ))}
                </div>
                <div className='flex justify-center mt-5'>
                    <Pagination count={10} color='orange' />
                </div>
            </React.Fragment>
        </div>
    );
};

export default Collections;
