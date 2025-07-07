// @ts-nocheck
// Simplified registry index with only used components
// This file has been cleaned up to remove unused demo components
import * as React from 'react';

export const Index: Record<string, any> = {
    index: {
        name: 'index',
        description: '',
        type: 'registry:style',
        registryDependencies: ['utils'],
        files: [],
        component: null,
        meta: undefined
    },
    accordion: {
        name: 'accordion',
        description: 'A vertically stacked set of interactive headings.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/accordion.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/accordion')),
        meta: undefined
    },
    badge: {
        name: 'badge',
        description: 'Displays a badge or a component that looks like a badge.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/badge.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/badge')),
        meta: undefined
    },
    button: {
        name: 'button',
        description: 'Displays a button or a component that looks like a button.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/button.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/button')),
        meta: undefined
    },
    card: {
        name: 'card',
        description: 'Displays a card with header, content, and footer.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/card.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/card')),
        meta: undefined
    },
    carousel: {
        name: 'carousel',
        description: 'A carousel component for displaying multiple items.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/carousel.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/carousel')),
        meta: undefined
    },
    chart: {
        name: 'chart',
        description: 'Chart components for data visualization.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/chart.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/chart')),
        meta: undefined
    },
    dialog: {
        name: 'dialog',
        description: 'A dialog component for displaying modal content.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/dialog.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/dialog')),
        meta: undefined
    },
    'dropdown-menu': {
        name: 'dropdown-menu',
        description: 'A dropdown menu component.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/dropdown-menu.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/dropdown-menu')),
        meta: undefined
    },
    input: {
        name: 'input',
        description: 'An input component for user input.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/input.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/input')),
        meta: undefined
    },
    label: {
        name: 'label',
        description: 'A label component for forms.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/label.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/label')),
        meta: undefined
    },
    progress: {
        name: 'progress',
        description: 'A progress bar component.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/progress.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/progress')),
        meta: undefined
    },
    separator: {
        name: 'separator',
        description: 'A separator component.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/separator.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/separator')),
        meta: undefined
    },
    sonner: {
        name: 'sonner',
        description: 'Toast notification component.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/sonner.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/sonner')),
        meta: undefined
    },
    table: {
        name: 'table',
        description: 'A table component for displaying data.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/table.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/table')),
        meta: undefined
    },
    tabs: {
        name: 'tabs',
        description: 'A set of layered sections of content.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/tabs.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/tabs')),
        meta: undefined
    },
    textarea: {
        name: 'textarea',
        description: 'A textarea component for multi-line text input.',
        type: 'registry:ui',
        registryDependencies: undefined,
        files: [
            {
                path: 'registry/ui/textarea.tsx',
                type: 'registry:ui',
                target: ''
            }
        ],
        component: React.lazy(() => import('@/registry/new-york-v4/ui/textarea')),
        meta: undefined
    }
};