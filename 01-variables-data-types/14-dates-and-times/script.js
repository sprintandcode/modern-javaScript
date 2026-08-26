let d;

d = new Date();

d = d.toString();

d = new Date(2026, 7, 26, 9, 49, 10);

d = new Date('2025-08-26T10:23:34');

d = new Date('07/10/2024 12:45:00');

d = new Date('2026-10-10');   // might be off by a day if your timezone is not set.

// Time in javaScript is measure in milliseconds and can be checked by below method
d = Date.now();

d = new Date('08-26-2026 9:54:00');
d = d.getTime();

console.log(d, typeof d);

e = new Date();
console.log(e);