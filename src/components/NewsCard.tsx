import { NewsItem } from '../data/news';

interface NewsCardProps {
  key?: string | number;
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  // Helper to safely parse and link the target platform keywords
  function renderTextWithLinks(text: string) {
    const parts = text.split(/(winbox666|winbox)/i);
    return parts.map((part, index) => {
      const lower = part.toLowerCase();
      if (lower === 'winbox666') {
        return (
          <a
            key={index}
            href="https://winbox666.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kopi font-bold hover:underline inline-flex items-center"
          >
            winbox666
          </a>
        );
      } else if (lower === 'winbox') {
        return (
          <a
            key={index}
            href="https://winbox666.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kopi font-bold hover:underline inline-flex items-center"
          >
            winbox
          </a>
        );
      }
      return part;
    });
  }

  return (
    <div className="p-4 border border-divider rounded-xl bg-paper">
      <div className="flex justify-between mb-2">
        <span className="text-[10px] font-bold bg-divider px-2 py-0.5 rounded uppercase tracking-wider text-ink-light">
          {item.category}
        </span>
        <span className="text-[10px] font-light text-gray-400">{item.timestamp}</span>
      </div>

      {item.imageUrl && (
        <div className="mb-3 overflow-hidden rounded-lg border border-divider">
          <img
            src={item.imageUrl}
            alt={item.headline}
            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <h2 className="text-[18px] font-bold leading-tight mb-2 text-ink">{item.headline}</h2>
      <p className="text-[13px] leading-relaxed mb-3 text-gray-700">
        {renderTextWithLinks(item.summary)}
      </p>
      <ul className="space-y-1 mb-3">
        {item.takeaways.map((point, index) => (
          <li key={index} className="text-[12px] flex items-start text-ink-light">
            <span className="text-kopi mr-2">•</span>
            <span>{renderTextWithLinks(point)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
