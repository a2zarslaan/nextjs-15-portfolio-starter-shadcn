import { Metadata } from 'next';
import { FunClient } from './fun-client';

export const metadata: Metadata = {
  title: 'Fun',
  description: 'Hobbies, interests, and personal projects outside of work',
};

export default function FunPage() {
  return <FunClient />;
}