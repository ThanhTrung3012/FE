import React from 'react';
import { BsSortDown, BsSortUp } from 'react-icons/bs';

export const marks = [
    {
        value: 0,
        label: '0đ'
    },
    {
        value: 50000000,
        label: '50.000.000đ'
    },
    {
        value: 100000000,
        label: '100.000.000đ'
    },
    {
        value: 150000000,
        label: '150.000.000đ'
    }
];

export const sorts = [
    {
        id:1,
        label: 'Giá cao',
        icon: React.createElement(BsSortUp),
        sort: 'price -1'
    },
    {
        id:2,
        label: 'Giá thấp',
        icon: React.createElement(BsSortDown),
        sort: 'price 1'
    },
    {
        id:3,
        label: 'Giảm giá cao',
        icon: React.createElement(BsSortUp),
        sort: 'discount -1'
    },
    {
        id:4,
        label: 'Giảm giá thấp',
        icon: React.createElement(BsSortDown),
        sort: 'discount 1'
    },
];
