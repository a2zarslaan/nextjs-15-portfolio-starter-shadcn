'use client';

import { Container } from '@/components/layout';
import {
    getAboutPageStats,
    getContactInfo,
    getPersonalInfo,
    getSocialLinks,
    getTechnologyNames
} from '@/lib/site-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { CheckCircle, Envelope, GithubLogo, Heart, MapPin, Trophy } from '@phosphor-icons/react/dist/ssr';

// Get data from centralized source
const personalInfo = getPersonalInfo();
const contactInfo = getContactInfo();
const skills = getTechnologyNames();
const socialLinks = getSocialLinks();
const stats = getAboutPageStats();

export default function AboutPageClient() {
    return (
        <main className='mt-16 pb-16 sm:mt-20 sm:pb-20'>
            <Container size='md' className='py-8 sm:py-12'>
                {/* Hero Section */}
                <div>
                    <div className='mb-16 space-y-6 text-center'>
                        <div className='relative inline-block'>
                            <div className='mx-auto h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1'>
                                <div className='flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800'>
                                    <span className='text-4xl font-bold text-neutral-800 dark:text-neutral-200'>
                                        {personalInfo.initials}
                                    </span>
                                </div>
                            </div>
                            <div className='absolute -right-2 -bottom-2 h-8 w-8 rounded-full border-4 border-white bg-green-500 dark:border-neutral-900'></div>
                        </div>

                        <div className='space-y-4'>
                            <h1 className='text-4xl font-bold tracking-tight'>About Me</h1>
                            <p className='mx-auto max-w-2xl text-xl text-neutral-600 sm:text-2xl dark:text-neutral-400'>
                                {personalInfo.title}
                            </p>
                            <p className='mx-auto max-w-3xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-500'>
                                {personalInfo.bio}
                            </p>
                        </div>

                        <div className='flex flex-wrap justify-center gap-4 pt-4'>
                            <Button
                                variant='default'
                                size='lg'
                                className='transition-all duration-300 hover:scale-105 hover:shadow-md'>
                                <Envelope className='mr-2 h-4 w-4' weight='regular' />
                                Get In Touch
                            </Button>
                            <Button variant='outline' size='lg' className='transition-all duration-300 hover:scale-105'>
                                <GithubLogo className='mr-2 h-4 w-4' weight='regular' />
                                View Work
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div>
                    <div className='mb-16 grid grid-cols-2 gap-4 lg:grid-cols-4'>
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className='border-0 bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-md dark:from-neutral-900 dark:to-neutral-800'>
                                <CardContent className='p-0'>
                                    <div className='mb-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100'>
                                        {stat.value}
                                    </div>
                                    <div className='text-sm text-neutral-600 dark:text-neutral-400'>{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* About Content */}
                <div className='mb-16'>
                    <div className='space-y-6'>
                        <div className='grid gap-6 lg:grid-cols-3'>
                            <div className='space-y-6 lg:col-span-2'>
                                <Card className='p-6'>
                                    <CardHeader className='mb-4 p-0'>
                                        <CardTitle className='flex items-center gap-2'>
                                            <Heart className='h-5 w-5 text-red-500' />
                                            About Me
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className='text-muted-foreground space-y-4 p-0'>
                                        <p>
                                            Hello! I&apos;m {personalInfo.name}, a passionate full-stack developer with
                                            over 5 years of experience crafting digital solutions that blend
                                            functionality with beautiful design. My journey in technology began with a
                                            curiosity about how things work and evolved into a deep love for creating
                                            applications that solve real-world problems.
                                        </p>
                                        <p>
                                            I specialize in modern web technologies including React, Next.js, and
                                            Node.js, with a strong focus on creating performant, accessible, and
                                            user-friendly applications. When I&apos;m not coding, you&apos;ll find me
                                            exploring new technologies, contributing to open source projects, or
                                            perfecting my coffee brewing technique.
                                        </p>
                                        <p>
                                            I believe in the power of clean code, thoughtful design, and continuous
                                            learning. Every project is an opportunity to push boundaries and create
                                            something meaningful that makes a positive impact on users&apos; lives.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className='p-6'>
                                    <CardHeader className='mb-4 p-0'>
                                        <CardTitle className='flex items-center gap-2'>
                                            <Trophy className='h-5 w-5 text-yellow-500' />
                                            Achievements
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className='p-0'>
                                        <Accordion type='single' collapsible className='w-full'>
                                            <AccordionItem value='2024'>
                                                <AccordionTrigger>2024 Highlights</AccordionTrigger>
                                                <AccordionContent className='space-y-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <CheckCircle className='h-4 w-4 text-green-500' />
                                                        <span className='text-sm'>
                                                            Led team of 5 developers in major platform redesign
                                                        </span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <CheckCircle className='h-4 w-4 text-green-500' />
                                                        <span className='text-sm'>
                                                            Reduced application load time by 60%
                                                        </span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <CheckCircle className='h-4 w-4 text-green-500' />
                                                        <span className='text-sm'>
                                                            Implemented CI/CD pipeline reducing deployment time by 80%
                                                        </span>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value='2023'>
                                                <AccordionTrigger>2023 Milestones</AccordionTrigger>
                                                <AccordionContent className='space-y-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <CheckCircle className='h-4 w-4 text-green-500' />
                                                        <span className='text-sm'>
                                                            Launched 3 major client projects
                                                        </span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <CheckCircle className='h-4 w-4 text-green-500' />
                                                        <span className='text-sm'>Mentored 4 junior developers</span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <CheckCircle className='h-4 w-4 text-green-500' />
                                                        <span className='text-sm'>
                                                            Achieved 98% client satisfaction rate
                                                        </span>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className='space-y-6'>
                                {/* Contact Info */}
                                <Card className='p-6'>
                                    <CardHeader className='mb-4 p-0'>
                                        <CardTitle className='text-lg'>Let's Connect</CardTitle>
                                    </CardHeader>
                                    <CardContent className='space-y-3 p-0'>
                                        <div className='text-muted-foreground hover:text-primary flex cursor-pointer items-center gap-3 transition-colors'>
                                            <MapPin className='h-4 w-4' />
                                            <span className='text-sm'>{contactInfo.location}</span>
                                        </div>
                                        <div className='text-muted-foreground hover:text-primary flex cursor-pointer items-center gap-3 transition-colors'>
                                            <Envelope className='h-4 w-4' />
                                            <span className='text-sm'>{contactInfo.email}</span>
                                        </div>
                                        <Separator className='my-4' />
                                        <div className='flex gap-3'>
                                            {socialLinks
                                                .filter((link) => link.platform !== 'Email')
                                                .map((social, index) => (
                                                    <div
                                                        key={index}
                                                        className='bg-muted hover:bg-muted/80 cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-110'>
                                                        <social.icon className='h-4 w-4' />
                                                    </div>
                                                ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Quick Skills */}
                                <Card className='p-6'>
                                    <CardHeader className='mb-4 p-0'>
                                        <CardTitle className='text-lg'>Core Technologies</CardTitle>
                                    </CardHeader>
                                    <CardContent className='p-0'>
                                        <div className='flex flex-wrap gap-2'>
                                            {skills.slice(0, 8).map((skill) => (
                                                <Badge
                                                    key={skill}
                                                    variant='secondary'
                                                    className='transition-all duration-300 hover:scale-105'>
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
