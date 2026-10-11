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

export function partitionReleases<T extends { stem: string }>(images: T[], dates: Record<string, string>, now = Date.now()) {
  const released = images.filter((image) => isReleaseDue(dates[image.stem], now));
  const upcoming = images.filter((image) => !isReleaseDue(dates[image.stem], now));
  released.sort((a, b) => releaseTime(dates[b.stem])! - releaseTime(dates[a.stem])! || a.stem.localeCompare(b.stem, 'en', { numeric: true }));
  return { released, upcoming };
}
