import { Metadata } from 'next';
import { WorkClient } from './work-client';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Professional experience, skills, and case studies',
};

export default function WorkPage() {
  return <WorkClient />;
}