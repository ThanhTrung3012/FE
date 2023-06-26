

export const getParamInUrl = (key) => {
    if(!key) return null;

    const url = new URL(window.location);
    const result = url.searchParams.get(key)
    return result;
};

export const getMultipleParamsInUrl = () => {
    const result = {};
    const params = new URLSearchParams(window.location.search);

    for (let item of params) {
        // each "item" is a [key,value] tupple
        const [key, value] = item;
        result[key] = value;
    }

    return result;
};
