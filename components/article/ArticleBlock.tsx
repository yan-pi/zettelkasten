import React from 'react';
import { CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface ArticleBlockProps {
  title: string;
  coverImage: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  description: string;
  articleUrl: string;
}

const ArticleBlock: React.FC<ArticleBlockProps> = ({
  title,
  coverImage,
  authorName,
  authorAvatar,
  date,
  description,
  articleUrl,
}) => {
  const { theme } = useTheme();

  return (
    <Card
      className={`w-[350px] bg-${theme === 'dark' ? 'black border-neutral-700' : 'white border-neutral-300'} text-${theme === 'dark' ? 'white' : 'black'}`}
    >
      <CardHeader>
        <img
          alt="Article Cover Image"
          className="rounded-t-lg object-cover w-full"
          height={200}
          src={coverImage}
          style={{
            aspectRatio: '350/200',
            objectFit: 'cover',
          }}
          width={350}
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="Author Avatar" src={authorAvatar} />
                <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{authorName}</p>
                <p className="text-gray-500 dark:text-gray-400">{date}</p>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 line-clamp-3">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link className="text-primary hover:underline" href={articleUrl}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleBlock;
