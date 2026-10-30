// Placeholder until the Home screen is built.
export default function Home() {
  return (
    <main className="flex flex-1 items-center bg-navy-900 bg-grid">
      <div className="container-page flex flex-col gap-4 py-24">
        <span className="font-mono text-xs tracking-eyebrow text-gold-400 uppercase">
          Setup complete
        </span>
        <h1 className="font-display text-5xl font-semibold tracking-display text-cream-200">
          Aurilearn
        </h1>
        <p className="max-w-xl text-lg text-mist-400">
          Design tokens, fonts and tooling are in place. Screens come next.
        </p>
      </div>
    </main>
  );
}
