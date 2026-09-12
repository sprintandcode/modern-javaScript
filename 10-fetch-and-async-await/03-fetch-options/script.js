function createPost ({title, body}) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',                  // HTTP method to be used
        body: JSON.stringify({           // body (in defined data structure) if using POST
            title,
            body
        }), 
        headers: {
            'Content-Type': 'application/json',  // type of content
            token: 'abc123'                      // token required for authentications
            }
    }).then(res => res.json())
      .then(data => console.log(data));
}

createPost({title: 'my-post', body: 'this is a post'})