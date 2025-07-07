import { Airplane, Book, Camera, GameController } from '@phosphor-icons/react';

export const hobbies = [
    {
        id: 'photography',
        name: 'Photography',
        icon: Camera,
        description: 'Capturing moments and exploring creative composition',
        images: [
            {
                id: 1,
                url: '/api/placeholder/400/300',
                alt: 'Landscape photography',
                description: 'Mountain sunrise in the Alps'
            },
            {
                id: 2,
                url: '/api/placeholder/400/300',
                alt: 'Street photography',
                description: 'Urban life in downtown'
            },
            {
                id: 3,
                url: '/api/placeholder/400/300',
                alt: 'Portrait photography',
                description: 'Environmental portrait session'
            },
            {
                id: 4,
                url: '/api/placeholder/400/300',
                alt: 'Nature photography',
                description: 'Wildlife in natural habitat'
            }
        ],
        stats: {
            photosShot: 2500,
            exhibitions: 3,
            equipmentValue: '$3,500'
        }
    },
    {
        id: 'gaming',
        name: 'Gaming',
        icon: GameController,
        description: 'Strategy games, indie titles, and competitive gaming',
        images: [
            {
                id: 1,
                url: '/api/placeholder/400/300',
                alt: 'Gaming setup',
                description: 'My custom gaming battlestation'
            },
            {
                id: 2,
                url: '/api/placeholder/400/300',
                alt: 'Game screenshot',
                description: 'Recent achievement in strategy game'
            },
            {
                id: 3,
                url: '/api/placeholder/400/300',
                alt: 'Gaming tournament',
                description: 'Local esports tournament participation'
            }
        ],
        stats: {
            gamesCompleted: 127,
            hoursPlayed: 1200,
            favoriteGenre: 'Strategy'
        }
    },
    {
        id: 'travel',
        name: 'Travel',
        icon: Airplane,
        description: 'Exploring new cultures and documenting adventures',
        images: [
            {
                id: 1,
                url: '/api/placeholder/400/300',
                alt: 'Tokyo street',
                description: 'Exploring Tokyo neighborhoods'
            },
            { id: 2, url: '/api/placeholder/400/300', alt: 'Mountain hiking', description: 'Hiking the Dolomites' },
            { id: 3, url: '/api/placeholder/400/300', alt: 'Beach sunset', description: 'Sunset in Santorini' },
            { id: 4, url: '/api/placeholder/400/300', alt: 'City skyline', description: 'Singapore skyline at night' }
        ],
        stats: {
            countriesVisited: 23,
            citiesExplored: 78,
            milesFlown: 45000
        }
    },
    {
        id: 'reading',
        name: 'Reading',
        icon: Book,
        description: 'Sci-fi, technology, and personal development books',
        images: [
            { id: 1, url: '/api/placeholder/400/300', alt: 'Book collection', description: 'My growing library' },
            { id: 2, url: '/api/placeholder/400/300', alt: 'Reading nook', description: 'Favorite reading spot' },
            { id: 3, url: '/api/placeholder/400/300', alt: 'Book notes', description: 'Taking notes on key insights' }
        ],
        stats: {
            booksRead: 156,
            pagesRead: 48000,
            favoriteGenre: 'Science Fiction'
        }
    }
];

export const goals2024 = [
    { name: 'Books to Read', current: 18, target: 24, unit: 'books' },
    { name: 'Countries to Visit', current: 3, target: 5, unit: 'countries' },
    { name: 'Photography Projects', current: 2, target: 4, unit: 'projects' },
    { name: 'Marathon Training', current: 150, target: 200, unit: 'miles' },
    { name: 'New Recipes', current: 12, target: 20, unit: 'recipes' },
    { name: 'Languages Learning', current: 1, target: 2, unit: 'languages' }
];

export const personalProjects = [
    {
        id: 1,
        name: 'Travel Blog',
        description: 'Documenting adventures and sharing travel tips',
        status: 'Active',
        image: '/api/placeholder/300/200',
        technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
        link: 'https://mytravelblog.com'
    },
    {
        id: 2,
        name: 'Photography Portfolio',
        description: 'Showcasing my best photographs across different genres',
        status: 'In Progress',
        image: '/api/placeholder/300/200',
        technologies: ['React', 'Framer Motion', 'Cloudinary'],
        link: 'https://photos.example.com'
    },
    {
        id: 3,
        name: 'Recipe Collection App',
        description: 'Personal recipe manager with meal planning features',
        status: 'Planning',
        image: '/api/placeholder/300/200',
        technologies: ['React Native', 'Firebase', 'TypeScript'],
        link: '#'
    }
];