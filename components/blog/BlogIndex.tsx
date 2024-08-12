import { getPagesUnderRoute } from 'nextra/context';
import Link from 'next/link';
import { type Page } from 'nextra';
import { Calendar } from 'lucide-react';

export const BlogIndex = ({ maxItems }: { maxItems?: number }) => (
  <div>
    {(getPagesUnderRoute('/blog') as Array<Page & { frontMatter: any }>).slice(0, maxItems).map((page) => (
      <Link key={page.route} href={page.route} className="flex flex-col md:flex-row justify-between md:items-center mb-8 group">
        <div className="flex items-center justify-between">
          <h2 className="block font-bold text-sm opacity-90 group-hover:opacity-100 md:text-2xl">
            {page.meta?.title || page.frontMatter?.title || page.name}
          </h2>
        </div>
        <div className="flex gap-2 flex-wrap items-baseline">
          {page.frontMatter?.date ? (
            <span className="flex items-center gap-3 opacity-60 text-sm group-hover:opacity-100">
              <Calendar />
              {page.frontMatter.date}
            </span>
          ) : null}
        </div>
      </Link>
    ))}
  </div>
);
