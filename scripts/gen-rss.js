const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
  const feed = new RSS({
    title: 'Yan Fernandes Blog',
    site_url: 'https://yan-zettelkasten.vercel.app/blog/',
    feed_url: 'https://yan-zettelkasten.vercel.app/feed.xml',
    language: 'en',
  });

  const getBlogPosts = async (dir) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(entries.map(async (entry) => {
      const res = path.resolve(dir, entry.name);
      return entry.isDirectory() ? getBlogPosts(res) : res;
    }));
    return Array.prototype.concat(...files);
  };

  const posts = await getBlogPosts(path.join(__dirname, '..', 'pages', 'blog'));

  await Promise.all(
    posts.map(async (filePath) => {
      if (!filePath.endsWith('.md') && !filePath.endsWith('.mdx')) return;

      const content = await fs.readFile(filePath, 'utf8');
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: 'https://yan-zettelkasten.vercel.app/blog/' + path.basename(filePath).replace(/\.mdx?/, ''),
        date: new Date(frontmatter.data.date).toUTCString(),
        description: frontmatter.data.description,
        categories: frontmatter.data.tags,
        author: frontmatter.data.author,
        enclosure: { url: 'https://yan-zettelkasten.vercel.app' + frontmatter.data.image },
      });
    })
  );

  await fs.writeFile(path.join(__dirname, '..', 'public', 'feed.xml'), feed.xml({ indent: true }));
  console.log('RSS feed generated successfully!');
}

generate().catch(err => console.error(err));
