import { Metadata } from 'next';
import { BlogClient } from './blog-client';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on development, technology, and life',
};

export default function BlogPage() {
  return <BlogClient />;
}