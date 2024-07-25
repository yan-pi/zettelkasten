import React, { useState, useEffect } from 'react';
import ArticleBlock from './ArticleBlock';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=yanpi');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error fetching articles: {error}</p>;
  }

  return (
    <div className="mt-4">
      <div className="flex flex-row flex-wrap gap-4">
        {articles.map((article) => (
          <ArticleBlock
            key={article.id}
            title={article.title}
            coverImage={article.cover_image || '/placeholder.svg'}
            authorName={article.user.name}
            authorAvatar={article.user.profile_image || '/placeholder-user.jpg'}
            date={new Date(article.published_at).toLocaleDateString()}            
            description={article.description}
            articleUrl={article.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
