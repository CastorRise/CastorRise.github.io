import test from 'node:test';
import assert from 'node:assert/strict';
import { releaseTime, isReleaseDue, isImageVisible } from '../src/lib/release-schedule.ts';

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

test('only configured formal illustrations are hidden; preview dates do not publish previews', () => {
  const dates = { scheduled: '2026-11-10', undated: '', invalid: 'oops' };
  const boundary = releaseTime('2026-11-10');
  assert.equal(isImageVisible('scheduled', dates, boundary - 1), false);
  assert.equal(isImageVisible('scheduled', dates, boundary), true);
  assert.equal(isImageVisible('ordinary', dates, boundary - 1), true);
  assert.equal(isImageVisible('undated', dates, boundary), false);
  assert.equal(isImageVisible('invalid', dates, boundary), false);
  assert.deepEqual(dates, { scheduled: '2026-11-10', undated: '', invalid: 'oops' });
});
