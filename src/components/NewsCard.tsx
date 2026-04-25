import { NewsItem } from '../data/news';

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <div className="p-4 border border-divider rounded-xl bg-paper">
      <div className="flex justify-between mb-2">
        <span className="text-[10px] font-bold bg-divider px-2 py-0.5 rounded uppercase tracking-wider text-ink-light">
          {item.category}
        </span>
        <span className="text-[10px] font-light text-gray-400">{item.timestamp}</span>
      </div>
      <h2 className="text-[18px] font-bold leading-tight mb-2 text-ink">{item.headline}</h2>
      <p className="text-[13px] leading-relaxed mb-3 text-gray-700">
        {item.summary}
      </p>
      <ul className="space-y-1 mb-3">
        {item.takeaways.map((point, index) => (
          <li key={index} className="text-[12px] flex items-start text-ink-light">
            <span className="text-kopi mr-2">•</span>
            {point}
          </li>
        ))}
      </ul>
      <a 
        href={item.sourceUrl} 
        className="text-[12px] font-bold text-kopi underline underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Baca penuh
      </a>
    </div>
  );
}
