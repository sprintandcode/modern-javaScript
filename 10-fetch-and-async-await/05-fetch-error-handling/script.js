// fetch('http://httpstat.us/200')
//     .then((response) => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     });


// Test with response.ok
fetch('http://httpstat.us/400')
    .then((response) => {
        if (response.ok) {                         // check response.ok
            throw new Error('Request Failed');     // throw error message
        } else if (response.status === 500) {
            throw new Error('Server Error');
        }
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);                        // catch error message if not ok in met
        // you can also add a DOM to show the error message caught here
    });

// catch runs on network error
fetch('http://hello123.net')
    .then((response) => {
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    });