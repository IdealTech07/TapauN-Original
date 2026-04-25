export function About() {
  return (
    <div className="p-4 border border-divider rounded-xl bg-paper opacity-90 text-center flex flex-col items-center py-12">
      <h1 className="text-2xl font-black tracking-tighter text-ink mb-2">
        TAPAU NEWS
      </h1>
      <span className="text-[10px] font-bold text-kopi uppercase tracking-widest leading-none mb-6">
        Kopi-O Edition
      </span>
      <p className="text-[14px] font-bold text-ink mb-4 max-w-[200px] leading-tight">
        We summarise so you don't have to.
      </p>
      <p className="text-[12px] font-light text-gray-500 leading-relaxed max-w-[220px]">
        Built for busy Malaysians. Getting straight to the point with 60-word summaries and quick takeaways. No fluff, no clickbait.
      </p>
    </div>
  );
}
