const socials = ['twitter', 'linkedin', 'facebook', 'instagram'];

// console.log(socials.__proto__);

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);


const socialObj = [
    { name: 'Twitter', url: 'x.com'},
    { name: 'facebook', url: 'facebook.com'},
    { name: 'instagram', url: 'instagram.com'},
    { name: 'linkedin', url: 'linkedin.com'},
];

socialObj.forEach((item) => console.log(item, item.name, item.url));