import test from 'node:test';
import assert from 'node:assert/strict';
import { releaseTime, isReleaseDue, partitionReleases } from '../src/lib/release-schedule.ts';

test('releases exactly at Shanghai midnight, regardless of server timezone', () => {
  const boundary = Date.parse('2026-11-09T16:00:00Z');
  assert.equal(releaseTime('2026-11-10'), boundary);
  assert.equal(isReleaseDue('2026-11-10', boundary - 1), false);
  assert.equal(isReleaseDue('2026-11-10', boundary), true);
  assert.equal(isReleaseDue('2026-11-10', boundary + 1), true);
});

test('missing and invalid dates never release; valid leap days work', () => {
  for (const date of [undefined, '', '2026-02-29', '2026-02-30', '2026-13-01', '2026-11-10T00:00:00', '2026-1-1']) {
    assert.equal(releaseTime(date), null);
    assert.equal(isReleaseDue(date, Date.parse('2100-01-01T00:00:00Z')), false);
  }
  assert.equal(releaseTime('2028-02-29'), Date.parse('2028-02-28T16:00:00Z'));
});

test('newest released works come first; undated and future works remain upcoming', () => {
  const images = ['old', 'new', 'future', 'undated', 'invalid'].map((stem) => ({ stem }));
  const dates = { old: '2026-10-10', new: '2026-10-11', future: '2026-11-10', invalid: 'oops' };
  const now = releaseTime('2026-10-11');
  const result = partitionReleases(images, dates, now);
  assert.deepEqual(result.released.map((image) => image.stem), ['new', 'old']);
  assert.deepEqual(result.upcoming.map((image) => image.stem), ['future', 'undated', 'invalid']);
  assert.equal(new Set([...result.released, ...result.upcoming]).size, images.length);
  assert.deepEqual(partitionReleases(images, dates, now), result);
  assert.equal(images[0].stem, 'old');
});
