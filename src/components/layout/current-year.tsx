// Cached so the footer stays prerendered; refreshes on the default cache schedule.
export async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
