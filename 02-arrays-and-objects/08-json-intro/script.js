const post = [
    {
    id:1, 
    title: 'Post One',
    body: 'This is a body',
}, 
{
    id:2, 
    title: 'Post Two',
    body: 'This is a body',
}
];

//Convert to JSON string

const str = JSON.stringify(post);

console.log(str);

// Parse JSON

const obj = JSON.parse(str);
console.log(obj);

// we can access the properties after parsing the data to object
