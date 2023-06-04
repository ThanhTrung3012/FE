import { useBoolean } from 'ahooks';
import React, { useCallback, useState } from 'react';
import AddCartDialog from '../components/AddCartDialog';

const useAddCartDialog = (setColor) => {
    const [product, setProduct] = useState();
    const [open, { setTrue, setFalse }] = useBoolean(false);

    const hanldeOpen = data => {
        setTrue();
        setProduct(data);
    };

    const render = useCallback(() => {
        return (
            <AddCartDialog
                product={product}
                setFalse={setFalse}
                open={open}
                setColor={setColor}
            />
        );
    }, [open, product]);

    return { hanldeOpen, render };
};

export default useAddCartDialog;
