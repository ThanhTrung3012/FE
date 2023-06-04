import { productService } from '@App/services/productService';
import { useRequest } from 'ahooks';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProductDetail = (setColor,setCapacity,setPrice) => {
    const { id } = useParams();
    const [mainImg, setMainImg] = useState(null);

    const {
        data: product,
        loading,
        runAsync: getProduct
    } = useRequest(productService.find, {
        manual: true,
        onSuccess: data => {
            setMainImg(data?.data?.images?.[0]);
            setCapacity(data?.data?.options?.[0]?.title)
            setColor(data?.data?.colors?.[0]?.title)
            setPrice(data?.data?.options?.[0]?.price)
        }
    });

    const handleGetProduct = async() => {
        await getProduct(id);
    }

    useEffect(() => {
        if (id) handleGetProduct();
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, [id]);

    return { product, loading,mainImg,setMainImg,handleGetProduct };
};

export default useProductDetail;
