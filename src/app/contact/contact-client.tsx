'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Container } from '@/components/layout';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';
import { Envelope, MapPin, Phone } from '@phosphor-icons/react';
import { getContactInfo, getSocialLinks } from '@/lib/site-data';

// Get data from centralized source
const contactData = getContactInfo();
const socialLinks = getSocialLinks();

const contactInfo = [
    {
        icon: Envelope,
        label: 'Email',
        value: contactData.email,
        href: `mailto:${contactData.email}`
    },
    {
        icon: Phone,
        label: 'Phone',
        value: contactData.phone,
        href: `tel:${contactData.phone.replace(/\D/g, '')}`
    },
    {
        icon: MapPin,
        label: 'Location',
        value: contactData.location,
        href: null
    }
];

export default function ContactClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        alert("Thank you for your message! I'll get back to you soon.");
    };

    return (
        <main className='mt-16 pb-16 sm:mt-20 sm:pb-20'>
            <Container size='md' className='py-8 sm:py-12'>
                <div className='mb-16 space-y-4 text-center'>
                    <h1 className='bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-neutral-100 dark:to-neutral-400'>
                        Let's Connect
                    </h1>
                    <p className='mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400'>
                        Ready to discuss your next project? I'd love to hear from you and explore how we can work together.
                    </p>
                </div>

                <div className='grid gap-8 lg:grid-cols-2'>
                    {/* Contact Form */}
                    <Card className='border-0 bg-gradient-to-br from-white to-neutral-50 transition-all duration-500 hover:shadow-lg dark:from-neutral-900 dark:to-neutral-800'>
                        <CardHeader className='p-8 pb-6'>
                            <CardTitle className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>Send a Message</CardTitle>
                            <CardDescription className='text-neutral-600 dark:text-neutral-400'>
                                Fill out the form below and I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='p-8 pt-0'>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid gap-4 sm:grid-cols-2'>
                                    <div className='space-y-2'>
                                        <Label htmlFor='name'>Name</Label>
                                        <Input id='name' name='name' placeholder='Your name' required />
                                    </div>
                                    <div className='space-y-2'>
                                        <Label htmlFor='email'>Email</Label>
                                        <Input
                                            id='email'
                                            name='email'
                                            type='email'
                                            placeholder='your@email.com'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='subject'>Subject</Label>
                                    <Input
                                        id='subject'
                                        name='subject'
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='message'>Message</Label>
                                    <Textarea
                                        id='message'
                                        name='message'
                                        placeholder='Tell me about your project...'
                                        className='min-h-[120px]'
                                        required
                                    />
                                </div>

                                <Button type='submit' className='w-full transition-all duration-300 hover:scale-105 hover:shadow-md' disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <div className='space-y-6'>
                        <Card className='border-0 bg-gradient-to-br from-white to-neutral-50 transition-all duration-500 hover:shadow-lg dark:from-neutral-900 dark:to-neutral-800'>
                            <CardHeader className='p-6 pb-4'>
                                <CardTitle className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>Contact Information</CardTitle>
                                <CardDescription className='text-neutral-600 dark:text-neutral-400'>Prefer to reach out directly? Here are my details.</CardDescription>
                            </CardHeader>
                            <CardContent className='p-6 pt-0 space-y-3'>
                                {contactInfo.map((item) => {
                                    const Icon = item.icon;
                                    const content = (
                                        <div className='flex items-center gap-3 rounded-lg p-3 text-neutral-700 transition-colors hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400'>
                                            <Icon className='h-5 w-5' weight='regular' />
                                            <div>
                                                <p className='font-medium'>{item.label}</p>
                                                <p className='text-sm text-neutral-600 dark:text-neutral-400'>{item.value}</p>
                                            </div>
                                        </div>
                                    );

                                    return item.href ? (
                                        <Link key={item.label} href={item.href}>
                                            {content}
                                        </Link>
                                    ) : (
                                        <div key={item.label}>{content}</div>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        <Card className='border-0 bg-gradient-to-br from-white to-neutral-50 transition-all duration-500 hover:shadow-lg dark:from-neutral-900 dark:to-neutral-800'>
                            <CardHeader className='p-6 pb-4'>
                                <CardTitle className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>Social Media</CardTitle>
                                <CardDescription className='text-neutral-600 dark:text-neutral-400'>
                                    Connect with me on social media for updates and insights.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='p-6 pt-0'>
                                <div className='space-y-3'>
                                    {socialLinks.filter(link => link.platform !== 'Email').map((social) => {
                                        const Icon = social.icon;

                                        return (
                                            <Link
                                                key={social.platform}
                                                href={social.url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='flex items-center gap-3 rounded-lg p-3 text-neutral-700 transition-colors hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400'>
                                                <Icon className='h-5 w-5' weight='regular' />
                                                <div>
                                                    <p className='font-medium'>{social.platform}</p>
                                                    <p className='text-sm text-neutral-600 dark:text-neutral-400'>{social.username}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className='border-0 bg-gradient-to-br from-white to-neutral-50 p-6 transition-all duration-500 hover:shadow-lg dark:from-neutral-900 dark:to-neutral-800'>
                            <CardContent className='p-0'>
                                <div className='space-y-2 text-center'>
                                    <h3 className='font-semibold text-neutral-900 dark:text-neutral-100'>Response Time</h3>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                                        I typically respond within 24 hours during business days.
                                    </p>
                                    <Separator className='my-4' />
                                    <p className='text-xs text-neutral-500 dark:text-neutral-500'>
                                        Open to freelance opportunities and collaborations
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </main>
    );
}
