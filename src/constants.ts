export const CHROME_STORE_URL =
  import.meta.env.VITE_CHROME_STORE_URL ||
  'https://chromewebstore.google.com/detail/focusfruit-pomodoro-timer/fmlkbhlcpkkgndjjmlbgdhkojokiechg';

// UTM tags show up in the Chrome Web Store Developer Dashboard acquisition report.
export function storeUrl(placement: string): string {
  const url = new URL(CHROME_STORE_URL);
  url.searchParams.set('utm_source', 'focusfruit-landing');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', placement);
  return url.toString();
}
