'use client';

import { useEffect, useState } from 'react';
import NavigationLinks from '@/components/layout/navigation-links';
import ThemeSwitch from '@/components/layout/theme-switch';

const NavigationBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsVisible(true);
    }, []);

    return (
        <div className='fixed top-4 left-1/2 z-50 px-4 sm:px-6'>
            <nav 
                className={`
                    backdrop-blur-md bg-background/80 
                    border border-border/50 
                    rounded-full shadow-md shadow-black/5 
                    transition-all duration-500 ease-out
                    px-3 py-2.5 sm:px-6 sm:py-3
                    ${isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-4 opacity-0'
                    }
                    hover:shadow-lg hover:shadow-black/10
                    transform -translate-x-1/2 isolate
                `}
                style={{ minWidth: 'max-content' }}
            >
                <div className='flex items-center justify-between gap-2 sm:gap-6 relative'>
                    <NavigationLinks />
                    <div className='flex-shrink-0 relative' style={{ contain: 'layout' }}>
                        <ThemeSwitch />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;