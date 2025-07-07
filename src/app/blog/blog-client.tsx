'use client';

import { Container } from '@/components/layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/registry/new-york-v4/ui/dialog';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/new-york-v4/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';
import { ArrowRight, BookOpen, Calendar, Clock, Tag, Wrench, User, Books, NotePencil } from '@phosphor-icons/react';
import { blogPosts, faqItems } from '@/lib/blog-data';

export function BlogClient() {
    const categories = [
        { value: 'all', label: 'All Posts', count: blogPosts.length },
        { value: 'technical', label: 'Technical', count: blogPosts.filter((p) => p.category === 'technical').length },
        { value: 'personal', label: 'Personal', count: blogPosts.filter((p) => p.category === 'personal').length },
        { value: 'tutorial', label: 'Tutorials', count: blogPosts.filter((p) => p.category === 'tutorial').length }
    ];

    const getFilteredPosts = (category: string) => {
        return category === 'all' ? blogPosts : blogPosts.filter((post) => post.category === category);
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'technical':
                return <Wrench className='h-4 w-4 text-orange-500' />;
            case 'personal':
                return <User className='h-4 w-4 text-blue-500' />;
            case 'tutorial':
                return <Books className='h-4 w-4 text-green-500' />;
            default:
                return <NotePencil className='h-4 w-4 text-purple-500' />;
        }
    };

    return (
        <Container className='mt-16 py-8 sm:mt-20 sm:py-12'>
            <div className='space-y-8'>
                {/* Header */}
                <div className='space-y-4 text-center'>
                    <h1 className='text-4xl font-bold tracking-tight'>Blog</h1>
                    <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
                        Thoughts on development, technology, and the journey of continuous learning
                    </p>
                </div>

                {/* Content Tabs */}
                <Tabs defaultValue='all' className='w-full'>
                    <TabsList className='mb-10 grid w-full grid-cols-4 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 p-1.5 rounded-xl shadow-sm'>
                        <TabsTrigger value='all' className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-purple-600 dark:data-[state=active]:to-pink-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white'>
                            <NotePencil className='h-4 w-4 text-muted-foreground' />
                            <span className='hidden sm:inline'>All Posts</span>
                            <Badge variant='secondary' className='ml-1 h-5 w-5 p-0 text-xs shadow-sm'>
                                {categories.find(c => c.value === 'all')?.count}
                            </Badge>
                        </TabsTrigger>
                        <TabsTrigger value='technical' className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-orange-600 dark:data-[state=active]:to-red-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white'>
                            <Wrench className='h-4 w-4 text-muted-foreground' />
                            <span className='hidden sm:inline'>Technical</span>
                            <Badge variant='secondary' className='ml-1 h-5 w-5 p-0 text-xs shadow-sm'>
                                {categories.find(c => c.value === 'technical')?.count}
                            </Badge>
                        </TabsTrigger>
                        <TabsTrigger value='personal' className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-blue-600 dark:data-[state=active]:to-cyan-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white'>
                            <User className='h-4 w-4 text-muted-foreground' />
                            <span className='hidden sm:inline'>Personal</span>
                            <Badge variant='secondary' className='ml-1 h-5 w-5 p-0 text-xs shadow-sm'>
                                {categories.find(c => c.value === 'personal')?.count}
                            </Badge>
                        </TabsTrigger>
                        <TabsTrigger value='tutorial' className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-green-600 dark:data-[state=active]:to-emerald-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white'>
                            <Books className='h-4 w-4 text-muted-foreground' />
                            <span className='hidden sm:inline'>Tutorials</span>
                            <Badge variant='secondary' className='ml-1 h-5 w-5 p-0 text-xs shadow-sm'>
                                {categories.find(c => c.value === 'tutorial')?.count}
                            </Badge>
                        </TabsTrigger>
                    </TabsList>

                    {categories.map((category) => (
                        <TabsContent key={category.value} value={category.value} className='mt-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500'>
                            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                                {getFilteredPosts(category.value).map((post) => (
                                    <Card key={post.id} className='group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg h-full'>
                                        <CardHeader className='py-4'>
                                            <div className='text-muted-foreground mb-3 flex items-center gap-2 text-sm'>
                                                <Calendar className='h-4 w-4' />
                                                {new Date(post.date).toLocaleDateString()}
                                                <Clock className='ml-2 h-4 w-4' />
                                                {post.readTime}
                                            </div>
                                            <CardTitle className='mb-2 line-clamp-2'>{post.title}</CardTitle>
                                            <CardDescription className='line-clamp-3'>{post.excerpt}</CardDescription>
                                        </CardHeader>
                                        <CardContent className='flex flex-1 flex-col justify-between pt-0'>
                                            <div className='mb-6 flex flex-wrap gap-2'>
                                                {post.tags.map((tag) => (
                                                    <Badge key={tag} variant='outline' className='text-xs'>
                                                        <Tag className='mr-1 h-3 w-3' />
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant='outline' className='w-full'>
                                                        <BookOpen className='mr-2 h-4 w-4' />
                                                        Read More
                                                        <ArrowRight className='ml-2 h-4 w-4' />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className='max-h-[80vh] max-w-4xl overflow-y-auto'>
                                                    <DialogHeader>
                                                        <DialogTitle className='text-2xl'>{post.title}</DialogTitle>
                                                        <DialogDescription className='flex items-center gap-4 text-base'>
                                                            <span className='flex items-center gap-1'>
                                                                <Calendar className='h-4 w-4' />
                                                                {new Date(post.date).toLocaleDateString()}
                                                            </span>
                                                            <span className='flex items-center gap-1'>
                                                                <Clock className='h-4 w-4' />
                                                                {post.readTime}
                                                            </span>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className='prose prose-sm mt-4 max-w-none'>
                                                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                                    </div>
                                                    <div className='mt-6 flex flex-wrap gap-2 border-t pt-4'>
                                                        {post.tags.map((tag) => (
                                                            <Badge key={tag} variant='secondary'>
                                                                <Tag className='mr-1 h-3 w-3' />
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <Separator className='my-12' />

                {/* Blog Archive Table */}
                <div className='space-y-6'>
                    <h2 className='mb-4 text-2xl font-semibold'>Archive</h2>
                    <Card className='group overflow-hidden transition-all duration-300 hover:shadow-lg'>
                        <CardHeader className='py-6'>
                            <CardTitle>All Posts</CardTitle>
                            <CardDescription>Complete list of all blog posts</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Read Time</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {blogPosts.map((post) => (
                                        <TableRow key={post.id}>
                                            <TableCell className='font-medium'>{post.title}</TableCell>
                                            <TableCell>
                                                <Badge variant='outline' className='flex items-center gap-1'>
                                                    {getCategoryIcon(post.category)} {post.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                                            <TableCell>{post.readTime}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                <Separator className='my-12' />

                {/* FAQ Section */}
                <div className='space-y-6'>
                    <h2 className='mb-4 text-2xl font-semibold'>Frequently Asked Questions</h2>
                    <Accordion type='single' collapsible className='w-full'>
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className='text-left'>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </Container>
    );
}
