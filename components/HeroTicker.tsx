/**
 * Mirrors the Framer "Hero Ticker" component (nodeId rEXB_BAtk),
 * instanced on the home page with the text "BEBETTER ".
 */
export default function HeroTicker({ text = "BEBETTER " }: { text?: string }) {
  const run = (
    <div className="flex shrink-0 whitespace-nowrap text-dark-10 ticker-text">
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i}>{text}</span>
      ))}
    </div>
  );

  return (
    <div className="pointer-events-none absolute inset-x-[-24px] top-1/2 -translate-y-1/2 overflow-hidden select-none">
      <div className="ticker-track flex w-max">
        {run}
        {run}
      </div>
    </div>
  );
}
