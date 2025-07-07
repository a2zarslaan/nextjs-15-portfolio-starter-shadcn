'use client';

import { useCallback } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';

interface NavigationItem {
    href?: string;
    label: string;
    children?: NavigationItem[];
}

const NAVIGATION_LINKS: NavigationItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/fun', label: 'Fun' },
    {
        label: 'Examples',
        children: [
            { href: '/examples', label: 'Examples Home' },
            { href: '/examples/frontend-developer', label: 'Frontend Developer' },
            { href: '/examples/fullstack-developer', label: 'Full Stack Developer' },
            { href: '/examples/ui-ux-designer', label: 'UI/UX Designer' }
        ]
    },
    { href: '/contact', label: 'Contact' }
];

const NavigationLinks = () => {
    const pathname = usePathname();
    const router = useRouter();

    // Prefetch route on hover for faster navigation
    const handleMouseEnter = useCallback(
        (href: string) => {
            router.prefetch(href);
        },
        [router]
    );

    // Check if a dropdown has any active children
    const isDropdownActive = useCallback(
        (item: NavigationItem) => {
            // Check if any child is active
            return item.children?.some(child => 
                child.href && pathname.startsWith(child.href)
            ) || false;
        },
        [pathname]
    );

    return (
        <div className='flex items-center gap-0.5 sm:gap-1'>
            {NAVIGATION_LINKS.map((item) => {
                // Handle dropdown items
                if (item.children) {
                    const isActive = isDropdownActive(item);
                    
                    return (
                        <DropdownMenu key={item.label}>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={`relative flex items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium transition-all duration-200 ease-out hover:bg-neutral-100/50 sm:px-3 sm:py-2 sm:text-sm dark:hover:bg-neutral-800/50 ${
                                        isActive
                                            ? 'text-neutral-900 dark:text-neutral-100'
                                            : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                                    }`}
                                    aria-expanded="false"
                                >
                                    {item.label}
                                    <CaretDown size={12} className="transition-transform duration-200 data-[state=open]:rotate-180" />
                                    {isActive && (
                                        <span
                                            className='absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-neutral-900 transition-all duration-200 sm:w-6 dark:bg-neutral-100'
                                            aria-hidden='true'
                                        />
                                    )}
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center" className="min-w-[200px]">
                                {item.children.map((child) => (
                                    <DropdownMenuItem key={child.href} asChild>
                                        <Link
                                            href={child.href!}
                                            onMouseEnter={() => handleMouseEnter(child.href!)}
                                            className="w-full cursor-pointer"
                                        >
                                            {child.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    );
                }

                // Handle regular links
                const isActive = item.href === '/' ? pathname === item.href : pathname.includes(item.href!);

                return (
                    <Link
                        key={item.href}
                        href={item.href!}
                        prefetch={true}
                        onMouseEnter={() => handleMouseEnter(item.href!)}
                        onFocus={() => handleMouseEnter(item.href!)}
                        className={`relative rounded-full px-2 py-1.5 text-xs font-medium transition-all duration-200 ease-out hover:bg-neutral-100/50 sm:px-3 sm:py-2 sm:text-sm dark:hover:bg-neutral-800/50 ${
                            isActive
                                ? 'text-neutral-900 dark:text-neutral-100'
                                : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                        } `}
                        aria-current={isActive ? 'page' : undefined}>
                        {item.label}
                        {isActive && (
                            <span
                                className='absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-neutral-900 transition-all duration-200 sm:w-6 dark:bg-neutral-100'
                                aria-hidden='true'
                            />
                        )}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavigationLinks;
