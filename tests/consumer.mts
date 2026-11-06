import * as api from '@lp-labs/utc-calendar-day-adder';
import { addCalendarDays } from '@lp-labs/utc-calendar-day-adder';
console.log(addCalendarDays('2024-01-31', 1));
// @ts-expect-error invalid argument must be rejected by declarations
api.addCalendarDays(20240101, 1);
