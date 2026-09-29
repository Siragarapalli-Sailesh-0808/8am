const ITEMS = [
  "Live bus tracking",
  "RFID boarding alerts",
  "Smart routes for Indian schools",
  "Driver, parent & ops apps",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="flex items-center px-6">
          {t}
          <span className="ml-12 text-[#E0B100]">•</span>
        </span>
      ))}
    </div>
  );
}

export default function ScrollingTicker() {
  return (
    <div className="sticky top-0 z-50 w-full h-9 bg-[var(--background)] border-b border-[var(--border)] overflow-hidden">
      <span className="sr-only">{ITEMS.join(", ")}</span>
      <div className="flex w-max h-full items-center animate-marquee text-[10px] font-black uppercase tracking-[0.3em] text-[var(--foreground)]/40 whitespace-nowrap">
        <Row />
        <Row />
      </div>
    </div>
  );
}
