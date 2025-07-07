import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const containerSizes = {
    sm: 'max-w-2xl',    // ~672px
    md: 'max-w-4xl',    // ~896px  
    lg: 'max-w-6xl',    // ~1152px
    xl: 'max-w-7xl',    // ~1280px
    full: 'max-w-full'  // 100%
};

export function Container({ children, className, size = 'md' }: ContainerProps) {
    return (
        <div className={cn(
            'mx-auto w-full px-6 sm:px-0',
            containerSizes[size],
            className
        )}>
            {children}
        </div>
    );
}