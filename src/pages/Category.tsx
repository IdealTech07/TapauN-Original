import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getNewsByCategory } from '../data/news';
import { NewsCard } from '../components/NewsCard';

const categoryMap: Record<string, string> = {
  business: 'Business',
  lifestyle: 'Lifestyle',
  entertainment: 'Entertainment'
};

const categoryTitles: Record<string, string> = {
  Business: 'Business Snacks',
  Lifestyle: 'Lifestyle Quickies',
  Entertainment: 'Entertainment Bites'
};

export function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const mappedCategory = categoryId ? categoryMap[categoryId.toLowerCase()] : null;
  
  const news = useMemo(() => {
    return mappedCategory ? getNewsByCategory(mappedCategory) : [];
  }, [mappedCategory]);

  if (!mappedCategory) {
    return <Navigate to="/" replace />;
  }

  const title = categoryTitles[mappedCategory] || mappedCategory;

  return (
    <>
      <div className="pb-2 border-b border-divider mb-4">
        <h1 className="text-[18px] font-black tracking-tighter text-ink">{title}</h1>
      </div>
      
      {news.length > 0 ? (
        <>
          {news.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </>
      ) : (
        <div className="p-8 text-center text-[12px] font-light text-gray-400 italic">
          <p>No snacks available right now.</p>
        </div>
      )}
    </>
  );
}
