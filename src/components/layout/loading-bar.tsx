'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const LoadingBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        // Start loading when pathname changes
        setIsLoading(true);
        setProgress(20);

        const timer1 = setTimeout(() => setProgress(60), 100);
        const timer2 = setTimeout(() => setProgress(90), 200);
        const timer3 = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
                setProgress(0);
            }, 200);
        }, 300);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [pathname]);

    if (!isLoading) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-0.5 z-50 bg-neutral-200 dark:bg-neutral-800">
            <div 
                className="h-full bg-blue-600 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default LoadingBar;