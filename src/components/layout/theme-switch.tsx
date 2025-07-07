'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { Button } from '@/registry/new-york-v4/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { CaretDown, Monitor, Moon, Sun } from '@phosphor-icons/react/dist/ssr';

const THEME_OPTIONS = [
    { name: 'System', value: 'system', icon: Monitor },
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon }
] as const;

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentOption = THEME_OPTIONS.find((option) => option.value === theme) || THEME_OPTIONS[0];
    const Icon = currentOption.icon;

    if (!mounted) {
        return (
            <Button
                variant='ghost'
                size='sm'
                className='h-9 rounded-full px-3 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800'
                disabled>
                <Monitor className='h-4 w-4' weight='regular' />
                <CaretDown className='ml-1 h-3 w-3 opacity-50' weight='bold' />
                <span className='sr-only'>Loading theme</span>
            </Button>
        );
    }

    return (
        <DropdownMenu onOpenChange={setIsOpen} modal={false}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='ghost'
                    size='sm'
                    className='h-9 rounded-full px-3 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    aria-label={`Current theme: ${currentOption.name}. Click to change theme`}>
                    <Icon className='h-4 w-4 transition-transform duration-200' weight='regular' />
                    <CaretDown
                        className={`ml-1 h-3 w-3 opacity-50 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        weight='bold'
                    />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
                align='center' 
                className='min-w-[140px]' 
                sideOffset={8}>
                {THEME_OPTIONS.map((option) => {
                    const OptionIcon = option.icon;
                    const isSelected = theme === option.value;

                    return (
                        <DropdownMenuItem
                            key={option.value}
                            onClick={() => setTheme(option.value)}
                            className='flex cursor-pointer items-center gap-2'>
                            <OptionIcon className='h-4 w-4' weight='regular' />
                            <span>{option.name}</span>
                            {isSelected && (
                                <div className='ml-auto h-2 w-2 rounded-full bg-neutral-600 dark:bg-neutral-400' />
                            )}
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeSwitch;
