'use client';

import Image from 'next/image';

import { Container } from '@/components/layout';
import { goals2024, hobbies, personalProjects } from '@/lib/fun-data';
import { COMMON_BLUR_DATA_URLS } from '@/lib/placeholder-utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/registry/new-york-v4/ui/carousel';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/registry/new-york-v4/ui/dialog';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';
import { Heart, Palette, Target, Trophy } from '@phosphor-icons/react';

export function FunClient() {
    const getProgressPercentage = (current: number, target: number) => {
        return Math.min((current / target) * 100, 100);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-500';
            case 'In Progress':
                return 'bg-yellow-500';
            case 'Planning':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <Container className='mt-16 py-8 sm:mt-20 sm:py-12'>
            <div className='space-y-8'>
                {/* Header */}
                <div className='space-y-4 text-center'>
                    <h1 className='text-4xl font-bold tracking-tight'>Fun & Hobbies</h1>
                    <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
                        Life beyond code: exploring creativity, adventure, and personal growth
                    </p>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue='hobbies' className='w-full'>
                    <TabsList className='mb-10 grid w-full grid-cols-3 rounded-xl bg-gradient-to-r from-neutral-100 to-neutral-200 p-1.5 shadow-sm dark:from-neutral-800 dark:to-neutral-700'>
                        <TabsTrigger
                            value='hobbies'
                            className='flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-red-600 dark:data-[state=active]:to-pink-600 [&[data-state=active]_svg]:text-white'>
                            <Heart className='text-muted-foreground h-4 w-4' />
                            <span className='hidden sm:inline'>Hobbies</span>
                            <span className='sm:hidden'>Fun</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value='goals'
                            className='flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-green-600 dark:data-[state=active]:to-emerald-600 [&[data-state=active]_svg]:text-white'>
                            <Target className='text-muted-foreground h-4 w-4' />
                            <span className='hidden sm:inline'>2024 Goals</span>
                            <span className='sm:hidden'>Goals</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value='projects'
                            className='flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-purple-600 dark:data-[state=active]:to-indigo-600 [&[data-state=active]_svg]:text-white'>
                            <Palette className='text-muted-foreground h-4 w-4' />
                            <span className='hidden sm:inline'>Personal Projects</span>
                            <span className='sm:hidden'>Projects</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Hobbies Tab */}
                    <TabsContent
                        value='hobbies'
                        className='animate-in fade-in-0 slide-in-from-bottom-4 mt-6 duration-500'>
                        <div className='space-y-8'>
                            {hobbies.map((hobby) => (
                                <Card key={hobby.id} className='overflow-hidden'>
                                    <CardHeader className='py-6'>
                                        <div className='flex items-center gap-3'>
                                            <div className='bg-primary/10 rounded-lg p-2'>
                                                <hobby.icon className='text-primary h-6 w-6' />
                                            </div>
                                            <div>
                                                <CardTitle className='text-2xl'>{hobby.name}</CardTitle>
                                                <CardDescription>{hobby.description}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className='grid gap-6 md:grid-cols-2'>
                                            {/* Image Gallery */}
                                            <div className='relative'>
                                                <Carousel className='w-full max-w-full overflow-hidden'>
                                                    <CarouselContent className='-ml-2 md:-ml-4'>
                                                        {hobby.images.map((image) => (
                                                            <CarouselItem key={image.id} className='pl-2 md:pl-4'>
                                                                <Dialog>
                                                                    <DialogTrigger asChild>
                                                                        <div className='cursor-pointer overflow-hidden rounded-lg'>
                                                                            <Image
                                                                                src={image.url}
                                                                                alt={image.alt}
                                                                                width={400}
                                                                                height={300}
                                                                                className='h-64 w-full object-cover transition-transform hover:scale-105'
                                                                                placeholder='blur'
                                                                                blurDataURL={
                                                                                    COMMON_BLUR_DATA_URLS.medium
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </DialogTrigger>
                                                                    <DialogContent className='max-w-4xl'>
                                                                        <DialogHeader>
                                                                            <DialogTitle>{image.alt}</DialogTitle>
                                                                            <DialogDescription>
                                                                                {image.description}
                                                                            </DialogDescription>
                                                                        </DialogHeader>
                                                                        <Image
                                                                            src={image.url}
                                                                            alt={image.alt}
                                                                            width={800}
                                                                            height={600}
                                                                            className='h-auto w-full rounded-lg'
                                                                            placeholder='blur'
                                                                            blurDataURL={COMMON_BLUR_DATA_URLS.large}
                                                                        />
                                                                    </DialogContent>
                                                                </Dialog>
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    <div className='pointer-events-none absolute inset-0 flex items-center justify-between px-2'>
                                                        <div className='pointer-events-auto'>
                                                            <CarouselPrevious className='relative left-0 translate-x-0 translate-y-0' />
                                                        </div>
                                                        <div className='pointer-events-auto'>
                                                            <CarouselNext className='relative right-0 translate-x-0 translate-y-0' />
                                                        </div>
                                                    </div>
                                                </Carousel>
                                            </div>

                                            {/* Stats */}
                                            <div className='space-y-4'>
                                                <h4 className='flex items-center gap-2 font-semibold'>
                                                    <Trophy className='h-4 w-4' />
                                                    Statistics
                                                </h4>
                                                <div className='grid gap-3'>
                                                    {Object.entries(hobby.stats).map(([key, value]) => (
                                                        <div
                                                            key={key}
                                                            className='bg-muted/50 flex items-center justify-between rounded-lg p-3'>
                                                            <span className='font-medium capitalize'>
                                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                                            </span>
                                                            <Badge variant='secondary'>{value}</Badge>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Goals Tab */}
                    <TabsContent
                        value='goals'
                        className='animate-in fade-in-0 slide-in-from-bottom-4 mt-6 duration-500'>
                        <div className='space-y-6'>
                            <Card className='group overflow-hidden transition-all duration-300 hover:shadow-lg'>
                                <CardHeader className='py-6'>
                                    <CardTitle className='flex items-center gap-2'>
                                        <Target className='h-5 w-5' />
                                        2024 Personal Goals
                                    </CardTitle>
                                    <CardDescription>
                                        Tracking my personal development and hobby goals for the year
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className='grid gap-6 md:grid-cols-2'>
                                        {goals2024.map((goal, index) => (
                                            <div key={index} className='space-y-3'>
                                                <div className='flex items-center justify-between'>
                                                    <span className='font-medium'>{goal.name}</span>
                                                    <span className='text-muted-foreground text-sm'>
                                                        {goal.current} / {goal.target} {goal.unit}
                                                    </span>
                                                </div>
                                                <Progress
                                                    value={getProgressPercentage(goal.current, goal.target)}
                                                    className='h-2'
                                                />
                                                <div className='text-muted-foreground text-sm'>
                                                    {Math.round(getProgressPercentage(goal.current, goal.target))}%
                                                    complete
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Goal Details Accordion */}
                            <Card className='group overflow-hidden transition-all duration-300 hover:shadow-lg'>
                                <CardHeader className='py-6'>
                                    <CardTitle>Goal Details</CardTitle>
                                    <CardDescription>More information about my 2024 goals</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Accordion type='single' collapsible className='w-full'>
                                        <AccordionItem value='reading'>
                                            <AccordionTrigger>Reading Challenge</AccordionTrigger>
                                            <AccordionContent>
                                                <p className='text-muted-foreground mb-4 text-sm'>
                                                    Aiming to read 24 books this year across different genres. Currently
                                                    focusing on:
                                                </p>
                                                <ul className='space-y-2 text-sm'>
                                                    <li>• Technology and software development books</li>
                                                    <li>• Science fiction and fantasy novels</li>
                                                    <li>• Biographies of inspiring entrepreneurs</li>
                                                    <li>• Personal development and productivity guides</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value='travel'>
                                            <AccordionTrigger>Travel Adventures</AccordionTrigger>
                                            <AccordionContent>
                                                <p className='text-muted-foreground mb-4 text-sm'>
                                                    Planning to visit 5 new countries this year. Completed trips:
                                                </p>
                                                <ul className='space-y-2 text-sm'>
                                                    <li>• Japan (March) - Cultural immersion in Tokyo and Kyoto</li>
                                                    <li>• Portugal (June) - Exploring Lisbon and Porto</li>
                                                    <li>• Iceland (August) - Natural wonders and photography</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value='fitness'>
                                            <AccordionTrigger>Marathon Training</AccordionTrigger>
                                            <AccordionContent>
                                                <p className='text-muted-foreground mb-4 text-sm'>
                                                    Training for my first marathon in October. Current progress:
                                                </p>
                                                <ul className='space-y-2 text-sm'>
                                                    <li>• Long runs: Up to 16 miles completed</li>
                                                    <li>• Weekly mileage: 25-30 miles</li>
                                                    <li>• Cross-training: Cycling and swimming</li>
                                                    <li>• Nutrition: Experimenting with race-day fueling</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Personal Projects Tab */}
                    <TabsContent
                        value='projects'
                        className='animate-in fade-in-0 slide-in-from-bottom-4 mt-6 duration-500'>
                        <div className='space-y-6'>
                            <Card className='group overflow-hidden transition-all duration-300 hover:shadow-lg'>
                                <CardHeader className='py-6'>
                                    <CardTitle className='flex items-center gap-2'>
                                        <Palette className='h-5 w-5' />
                                        Personal Projects
                                    </CardTitle>
                                    <CardDescription>
                                        Creative projects and side ventures that fuel my passion
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                                {personalProjects.map((project) => (
                                    <Card key={project.id} className='flex flex-col'>
                                        <CardHeader className='py-6'>
                                            <div className='flex items-center justify-between'>
                                                <CardTitle className='text-lg'>{project.name}</CardTitle>
                                                <div className='flex items-center gap-2'>
                                                    <div
                                                        className={`h-2 w-2 rounded-full ${getStatusColor(project.status)}`}
                                                    />
                                                    <Badge variant='outline' className='text-xs'>
                                                        {project.status}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <CardDescription>{project.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className='flex flex-1 flex-col justify-between'>
                                            <div className='space-y-4'>
                                                <Image
                                                    src={project.image}
                                                    alt={project.name}
                                                    width={300}
                                                    height={200}
                                                    className='h-32 w-full rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 object-cover dark:from-blue-950/30 dark:to-purple-950/30'
                                                    placeholder='blur'
                                                    blurDataURL={COMMON_BLUR_DATA_URLS.card}
                                                />
                                                <div className='flex flex-wrap gap-1'>
                                                    {project.technologies.map((tech) => (
                                                        <Badge key={tech} variant='secondary' className='text-xs'>
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <Button
                                                variant='outline'
                                                className='mt-4 w-full'
                                                disabled={project.link === '#'}>
                                                {project.link === '#' ? 'Coming Soon' : 'View Project'}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Container>
    );
}
