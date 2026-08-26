let x;

let d = new Date();

x = d.toString();

x = d.getTime();

x = d.valueOf();

year = d.getFullYear();

month = d.getMonth();

date = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

const todayDate = `Today's date is ${date}/${month}/${year}`

console.log(todayDate);

// Modern & powerful way to format date and time w.r.t the country or region

let intDate;

intDate = Intl.DateTimeFormat('en-US').format.apply(d);
console.log(intDate);

intDate = Intl.DateTimeFormat('en-UK').format.apply(d);
console.log(intDate);

intDate = Intl.DateTimeFormat('ja-JP-u-ca-japanese').format.apply(d);
console.log(intDate);