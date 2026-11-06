import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('adds within month', () => {
  assert.equal(api.addCalendarDays('2024-01-01', 3), '2024-01-04');
});
test('crosses month boundary', () => {
  assert.equal(api.addCalendarDays('2024-01-31', 1), '2024-02-01');
});
test('crosses leap day', () => {
  assert.equal(api.addCalendarDays('2024-02-28', 1), '2024-02-29');
});
test('subtracts days', () => {
  assert.equal(api.addCalendarDays('2024-03-01', -1), '2024-02-29');
});
test('supports zero offset', () => {
  assert.equal(api.addCalendarDays('2024-05-06', 0), '2024-05-06');
});
test('rejects invalid date', () => {
  assert.throws(() => api.addCalendarDays('2023-02-29', 1), RangeError);
});
