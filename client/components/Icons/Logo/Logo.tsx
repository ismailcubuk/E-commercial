import React from 'react'
import Image from 'next/image';

export default function logo({ variant }: any) {
    let logoPath = '';
    let width = 46;
    let height = 46;
    switch (variant) {
        case 'Apple':
            logoPath = '/images/logo/apple.svg';
            break;
        case 'SAMSUNG':
            logoPath = '/images/logo/samsung.svg';
            width = 88;
            height = 33;
            break;
        case 'Samsung':
            logoPath = '/images/logo/samsung.svg';
            width = 88;
            height = 33;
            break;
        case 'adidas':
            logoPath = '/images/logo/adidas.svg';
            break;
        case 'nike':
            logoPath = '/images/logo/nike.svg';
            break;
        case 'puma':
            logoPath = '/images/logo/puma.svg';
            break;
        case 'Logitech':
            logoPath = '/images/logo/Logitech.svg';
            break;
        case 'Razer':
            logoPath = '/images/logo/Razer.svg';
            break;
        case 'Steelseries':
            logoPath = '/images/logo/Steelseries.svg';
            break;
        default:
            break;
    }
    if (logoPath === '') {
        return null;
    }
    return (
        <Image
            src={logoPath}
            alt={`${variant} Logo`}
            width={width}
            height={height}
            objectFit='cover'
            className='border-2'
        />
    )
}
