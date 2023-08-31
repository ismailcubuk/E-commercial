import React, { ReactNode } from 'react';

import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode; 
}

function Layout({ children }: LayoutProps) {
    
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-grow flex'>{children}</main>
        </div>
    );
}

export default Layout;
