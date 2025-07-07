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
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/new-york-v4/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';
import {
    ArrowRight,
    Briefcase,
    Building,
    Calendar,
    ChartBar,
    CheckCircle,
    Code,
    Globe,
    Lightbulb,
    Target,
    TrendUp,
    Trophy
} from '@phosphor-icons/react';
import { caseStudies, experience, skills } from '@/lib/work-data';

export function WorkClient() {
    const getSkillColor = (level: number) => {
        if (level >= 90) return 'bg-green-500';
        if (level >= 80) return 'bg-blue-500';
        if (level >= 70) return 'bg-yellow-500';

        return 'bg-gray-500';
    };

    const getExperienceIcon = (type: string) => {
        switch (type) {
            case 'Full-time':
                return <Briefcase className='h-4 w-4' />;
            case 'Freelance':
                return <Globe className='h-4 w-4' />;
            default:
                return <Building className='h-4 w-4' />;
        }
    };

    return (
        <Container className='mt-16 py-8 sm:mt-20 sm:py-12'>
            <div className='space-y-8'>
                {/* Header */}
                <div className='space-y-4 text-center'>
                    <h1 className='text-4xl font-bold tracking-tight'>Work Experience</h1>
                    <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
                        Professional journey, technical expertise, and project case studies
                    </p>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue='experience' className='w-full'>
                    <TabsList className='mb-10 grid w-full grid-cols-3 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 p-1.5 rounded-xl shadow-sm'>
                        <TabsTrigger value='experience' className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-green-600 dark:data-[state=active]:to-emerald-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white'>
                            <Briefcase className='h-4 w-4 text-muted-foreground' />
                            <span className="hidden sm:inline">Experience</span>
                            <span className="sm:hidden">Exp</span>
                        </TabsTrigger>
                        <TabsTrigger value='skills' className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-blue-600 dark:data-[state=active]:to-cyan-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white'>
                            <ChartBar className='h-4 w-4 text-muted-foreground' />
                            <span className="hidden sm:inline">Skills</span>
                            <span className="sm:hidden">Skills</span>
                        </TabsTrigger>
                        <TabsTrigger value='case-studies' className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:from-yellow-600 dark:data-[state=active]:to-orange-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] [&[data-state=active]_svg]:text-white'>
                            <Lightbulb className='h-4 w-4 text-muted-foreground' />
                            <span className="hidden sm:inline">Case Studies</span>
                            <span className="sm:hidden">Cases</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Experience Tab */}
                    <TabsContent value='experience' className='mt-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500'>
                        <div className='space-y-8'>
                            {experience.map((job) => (
                                <Card key={job.id} className='group overflow-hidden transition-all duration-300 hover:shadow-lg h-full'>
                                    <CardHeader className='py-6'>
                                        <div className='flex items-start justify-between'>
                                            <div className='space-y-2'>
                                                <CardTitle className='text-xl'>{job.position}</CardTitle>
                                                <CardDescription className='flex items-center gap-2'>
                                                    <Building className='h-4 w-4' />
                                                    {job.company}
                                                </CardDescription>
                                            </div>
                                            <div className='text-muted-foreground text-right text-sm'>
                                                <div className='flex items-center gap-1'>
                                                    <Calendar className='h-4 w-4' />
                                                    {job.duration}
                                                </div>
                                                <div className='mt-1 flex items-center gap-1'>
                                                    {getExperienceIcon(job.type)}
                                                    {job.type}
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className='space-y-8 pt-0'>
                                        <p className='text-muted-foreground leading-relaxed'>{job.description}</p>

                                        <div className='grid gap-8 md:grid-cols-2'>
                                            {/* Achievements */}
                                            <div className='space-y-4'>
                                                <h4 className='mb-3 flex items-center gap-2 font-semibold'>
                                                    <Trophy className='h-4 w-4' />
                                                    Key Achievements
                                                </h4>
                                                <ul className='space-y-3'>
                                                    {job.achievements.map((achievement, index) => (
                                                        <li key={index} className='flex items-start gap-2 text-sm'>
                                                            <CheckCircle className='mt-0.5 h-4 w-4 flex-shrink-0 text-green-500' />
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            <div className='space-y-4'>
                                                <h4 className='mb-3 flex items-center gap-2 font-semibold'>
                                                    <Code className='h-4 w-4' />
                                                    Technologies Used
                                                </h4>
                                                <div className='flex flex-wrap gap-2'>
                                                    {job.technologies.map((tech) => (
                                                        <Badge key={tech} variant='secondary'>
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Projects */}
                                        <div className='space-y-4'>
                                            <h4 className='mb-3 flex items-center gap-2 font-semibold'>
                                                <Target className='h-4 w-4' />
                                                Notable Projects
                                            </h4>
                                            <div className='grid gap-6 md:grid-cols-2'>
                                                {job.projects.map((project, index) => (
                                                    <Card key={index} className='bg-muted/50 transition-all duration-300 hover:shadow-sm hover:bg-muted/70'>
                                                        <CardHeader className='py-4'>
                                                            <CardTitle className='text-base'>{project.name}</CardTitle>
                                                            <CardDescription className='text-xs'>
                                                                {project.timeline}
                                                            </CardDescription>
                                                        </CardHeader>
                                                        <CardContent className='pt-0'>
                                                            <p className='text-muted-foreground mb-3 text-sm'>
                                                                {project.description}
                                                            </p>
                                                            <Badge variant='outline' className='text-xs'>
                                                                <TrendUp className='mr-1 h-3 w-3' />
                                                                {project.impact}
                                                            </Badge>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Skills Tab */}
                    <TabsContent value='skills' className='mt-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500'>
                        <div className='space-y-8'>
                            {skills.map((skillGroup) => (
                                <Card key={skillGroup.category} className='group overflow-hidden transition-all duration-300 hover:shadow-lg h-full'>
                                    <CardHeader className='py-6'>
                                        <CardTitle className='flex items-center gap-2'>
                                            <skillGroup.icon className='h-5 w-5' />
                                            {skillGroup.category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className='space-y-4'>
                                            {skillGroup.skills.map((skill) => (
                                                <div key={skill.name} className='space-y-2'>
                                                    <div className='flex items-center justify-between'>
                                                        <span className='font-medium'>{skill.name}</span>
                                                        <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                                                            <span>{skill.years} years</span>
                                                            <Badge variant='secondary'>{skill.level}%</Badge>
                                                        </div>
                                                    </div>
                                                    <Progress value={skill.level} className='h-2' />
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}

                            {/* Skills Table */}
                            <Card className='group overflow-hidden transition-all duration-300 hover:shadow-lg'>
                                <CardHeader className='py-6'>
                                    <CardTitle>Skills Overview</CardTitle>
                                    <CardDescription>Comprehensive view of technical proficiencies</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Skill</TableHead>
                                                <TableHead>Category</TableHead>
                                                <TableHead>Proficiency</TableHead>
                                                <TableHead>Experience</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {skills.flatMap((group) =>
                                                group.skills.map((skill) => (
                                                    <TableRow key={`${group.category}-${skill.name}`}>
                                                        <TableCell className='font-medium'>{skill.name}</TableCell>
                                                        <TableCell>
                                                            <Badge variant='outline'>{group.category}</Badge>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className='flex items-center gap-2'>
                                                                <div
                                                                    className={`h-3 w-3 rounded-full ${getSkillColor(skill.level)}`}
                                                                />
                                                                {skill.level}%
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>{skill.years} years</TableCell>
                                                    </TableRow>
                                                ))
                                            )}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Case Studies Tab */}
                    <TabsContent value='case-studies' className='mt-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500'>
                        <div className='space-y-8'>
                            {caseStudies.map((study) => (
                                <Card key={study.id} className='group overflow-hidden transition-all duration-300 hover:shadow-lg h-full'>
                                    <CardHeader className='py-6'>
                                        <CardTitle className='text-2xl'>{study.title}</CardTitle>
                                        <CardDescription>{study.overview}</CardDescription>
                                        <div className='text-muted-foreground flex gap-4 text-sm'>
                                            <span>Client: {study.client}</span>
                                            <span>Duration: {study.duration}</span>
                                            <span>Team: {study.team}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className='space-y-6'>
                                        <Accordion type='single' collapsible className='w-full'>
                                            <AccordionItem value='challenge'>
                                                <AccordionTrigger>Challenge</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className='text-muted-foreground'>{study.challenge}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value='solution'>
                                                <AccordionTrigger>Solution</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className='text-muted-foreground'>{study.solution}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value='results'>
                                                <AccordionTrigger>Results</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className='grid gap-4 md:grid-cols-2'>
                                                        {study.results.map((result, index) => (
                                                            <div key={index} className='bg-muted/50 rounded-lg p-4'>
                                                                <h5 className='font-semibold'>{result.metric}</h5>
                                                                <div className='mt-2 flex items-center gap-2'>
                                                                    <span className='text-muted-foreground text-sm'>
                                                                        {result.before}
                                                                    </span>
                                                                    <ArrowRight className='h-4 w-4' />
                                                                    <span className='text-sm font-medium'>
                                                                        {result.after}
                                                                    </span>
                                                                </div>
                                                                <Badge variant='outline' className='mt-2'>
                                                                    <TrendUp className='mr-1 h-3 w-3' />
                                                                    {result.improvement} improvement
                                                                </Badge>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value='lessons'>
                                                <AccordionTrigger>Lessons Learned</AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className='space-y-2'>
                                                        {study.lessons.map((lesson, index) => (
                                                            <li key={index} className='flex items-start gap-2 text-sm'>
                                                                <Lightbulb className='mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-500' />
                                                                {lesson}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>

                                        <div className='space-y-2'>
                                            <h4 className='font-semibold'>Technologies Used</h4>
                                            <div className='flex flex-wrap gap-2'>
                                                {study.technologies.map((tech) => (
                                                    <Badge key={tech} variant='secondary'>
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Container>
    );
}
