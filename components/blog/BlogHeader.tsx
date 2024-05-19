import Image from 'next/image';
import { Calendar } from 'lucide-react';

export const BlogHeader = ({
  title,
  description,
  date,
}: {
  title: string;
  description?: string;
  date?: string;
}) => (
  <div className="flex flex-col gap-1 my-10">
    <h1 className="flex start font-bold leading-snug text-balance">{title}</h1>
    <p className="text-primary text-base mb-4 text-balance">{description}</p>
     <div className='flex flex-row gap-4'>
      <Calendar />
      <span className="text-gray-400">{date}</span>
    </div>
  </div>
);