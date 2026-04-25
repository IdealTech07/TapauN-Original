import { useMemo } from 'react';
import { getNewsByCategory } from '../data/news';
import { NewsCard } from '../components/NewsCard';

export function Home() {
  const news = useMemo(() => getNewsByCategory('All'), []);

  return (
    <>
      {news.map(item => (
        <NewsCard key={item.id} item={item} />
      ))}
    </>
  );
}
