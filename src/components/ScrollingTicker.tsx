export default function ScrollingTicker() {
  const content =
    "Now serving 15+ Smart Cities • Safety First: AI-Powered Tracking • India's Most Trusted Student Network • ";

  return (
    <div className="sticky top-0 z-50 w-full h-9 bg-white border-b border-[#EEEEEE] overflow-hidden whitespace-nowrap">
      <div className="inline-block min-w-full animate-marquee pt-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#3B2F00]/30">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
