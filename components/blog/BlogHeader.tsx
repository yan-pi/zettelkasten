import { Calendar } from 'lucide-react';

export const BlogHeader = ({ title, description, date }: { title: string; description?: string; date?: string }) => (
  <div className="flex flex-col gap-1 my-10">
    <h1 className="font-bold leading-snug">{title}</h1>
    <div className="flex flex-row gap-4">
      <Calendar />
      <span className="text-gray-400">{date}</span>
    </div>
  </div>
);
