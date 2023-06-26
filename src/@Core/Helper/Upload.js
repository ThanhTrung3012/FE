

import { errorMessage } from './Message';

export const uploadCloudinary = async file => {
    let image_url = '';
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_NAME);

    await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,
        { method: 'POST', body: formData }
    )
        .then(data => {
            return data.json();
        })
        .then(data => {
            image_url = data.url;
        })
        .catch(error => {
            console.log(error);
            errorMessage('Có lỗi sảy ra khi tải ảnh');
        });

    return image_url;
};

export const uploadCloudinaryMultiple = async files => {
    let imageArray = [];
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append('file', file);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_NAME);

        await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,
            { method: 'POST', body: formData }
        )
            .then(data => {
                return data.json();
            })
            .then(data => {
                imageArray.push(data.url);
            })
            .catch(error => {
                console.log(error);
                errorMessage('Có lỗi sảy ra khi tải ảnh');
            });
    }

    return imageArray;
};
