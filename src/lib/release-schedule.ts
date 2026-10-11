// A date releases at 00:00 in Asia/Shanghai, independent of the build or visitor timezone.
export function releaseTime(date: string | undefined): number | null {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const utc = Date.parse(`${date}T00:00:00Z`);
  if (!Number.isFinite(utc) || new Date(utc).toISOString().slice(0, 10) !== date) return null;
  return utc - 8 * 60 * 60 * 1000;
}

export function isReleaseDue(date: string | undefined, now = Date.now()): boolean {
  const time = releaseTime(date);
  return time !== null && time <= now;
}

// Ordinary images are visible. A configured image stays hidden until its date;
// an empty or invalid configured date keeps it hidden indefinitely.
export function isImageVisible(stem: string, dates: Record<string, string>, now = Date.now()): boolean {
  return !Object.hasOwn(dates, stem) || isReleaseDue(dates[stem], now);
}
