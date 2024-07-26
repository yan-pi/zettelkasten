const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

console.log('SITE_URL:', process.env.SITE_URL);

const postsDirectory = path.join(process.cwd(), 'pages', 'blog');

function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Remove the import statement for BlogHeader
    const contentWithoutImport = content.replace(/import\s*{\s*BlogHeader\s*}\s*from\s*['"]@\/components\/blog\/BlogHeader['"];?\s*/g, '');

    // Remove the BlogHeader component
    const contentWithoutBlogHeader = contentWithoutImport.replace(/<BlogHeader[\s\S]*?\/>/g, '');

    return {
      title: data.title,
      date: data.date,
      description: data.description,
      author: data.author,
      category: data.category,
      type: data.type,
      image: data.image,
      content: contentWithoutBlogHeader,
      slug: fileName.replace(/\.mdx$/, ''),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function generateRSS() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const feedUrl = `${siteUrl}/rss.xml`;

  const feed = new RSS({
    title: 'Yan Fernandes Blog',
    description: 'This is my blog',
    feed_url: feedUrl,
    site_url: siteUrl,
    language: 'en',
  });

  const posts = getPosts();

  posts.forEach(post => {
    feed.item({
      title: post.title,
      description: post.content,
      author: post.author,
      categories: post.category,
      enclosure: { url: `${siteUrl}${post.image}` },
      url: `${siteUrl}/blog/${post.slug}`,
      date: post.date,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync(path.join(process.cwd(), 'public', 'rss.xml'), rss);
}

generateRSS();