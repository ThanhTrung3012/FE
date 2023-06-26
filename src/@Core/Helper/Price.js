

const handlePrice = (number, space = '.', currencyUnit = 'đ') => {
    if (!number) {
        return 0;
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, space) + currencyUnit;
};

export const handlePercentPrice = (price, discount = 0) => {
    const priceDiscount = price - price * (discount / 100);
    return priceDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
};

export default handlePrice;
