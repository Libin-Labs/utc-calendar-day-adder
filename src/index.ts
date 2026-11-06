function utcCalendarDate(year: number, month: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return date;
}
export function addCalendarDays(isoDate: string, days: number): string {
  if (typeof isoDate !== 'string' || !Number.isSafeInteger(days))
    throw new TypeError('Expected ISO date and safe integer days');
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) throw new RangeError('Expected YYYY-MM-DD');
  const y = Number(match[1]),
    m = Number(match[2]),
    d = Number(match[3]);
  const date = utcCalendarDate(y, m, d);
  if (
    y < 1 ||
    date.getUTCFullYear() !== y ||
    date.getUTCMonth() !== m - 1 ||
    date.getUTCDate() !== d
  )
    throw new RangeError('Invalid calendar date');
  date.setUTCDate(date.getUTCDate() + days);
  if (date.getUTCFullYear() < 1 || date.getUTCFullYear() > 9999)
    throw new RangeError('Result outside supported year range');
  return date.toISOString().slice(0, 10);
}
